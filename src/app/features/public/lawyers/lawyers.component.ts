import { Component, inject, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { LawyerService } from '@core/services/lawyer.service';
import { Lawyer, LawyerFilterParams } from '@core/models/lawyer.model';

const PRACTICE_AREAS = [
  'Criminal Law', 'Family Law', 'Corporate Law', 'Property Law',
  'Constitutional Law', 'Tax Law', 'Cyber Law', 'Labor Law',
  'Banking Law', 'Intellectual Property', 'Civil Litigation', 'Immigration Law',
];

@Component({
  selector: 'kar-lawyers',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, DecimalPipe],
  templateUrl: './lawyers.component.html',
  styleUrl: './lawyers.component.scss'
})
export class LawyersComponent implements OnInit, OnDestroy {
  private svc     = inject(LawyerService);
  private route   = inject(ActivatedRoute);
  private router  = inject(Router);
  private destroy = new Subject<void>();

  // -- State ----------------------------------------------------------------
  lawyers      = signal<Lawyer[]>([]);
  loading      = signal(true);
  error        = signal<string | null>(null);
  totalCount   = signal(0);
  currentPage  = signal(1);
  totalPages   = signal(1);
  pageSize     = signal(12);
  filtersOpen  = signal(false);

  // -- Filters --------------------------------------------------------------
  search         = new FormControl('');
  practiceArea   = signal('');
  minRating      = signal<number | null>(null);
  sortBy         = signal<'rating' | 'experience' | 'cases'>('rating');

  readonly practiceAreas = PRACTICE_AREAS;
  readonly ratingOptions = [
    { label: '4.5+ Excellent', value: 4.5 },
    { label: '4.0+ Very Good', value: 4.0 },
    { label: '3.5+ Good',      value: 3.5 },
  ];
  readonly sortOptions = [
    { label: 'Top Rated',       value: 'rating'     as const },
    { label: 'Most Experienced',value: 'experience' as const },
    { label: 'Most Cases',      value: 'cases'      as const },
  ];

  // -- Computed -------------------------------------------------------------
  hasFilters = computed(() =>
    !!this.search.value || !!this.practiceArea() || this.minRating() !== null
  );

  pageNumbers = computed(() => {
    const total = this.totalPages();
    const cur   = this.currentPage();
    const pages: (number | '...')[] = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (cur > 3) pages.push('...');
      for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) pages.push(i);
      if (cur < total - 2) pages.push('...');
      pages.push(total);
    }
    return pages;
  });

  ngOnInit(): void {
    // Sync search query param
    this.route.queryParams.pipe(takeUntil(this.destroy)).subscribe(p => {
      if (p['q']) this.search.setValue(p['q'], { emitEvent: false });
      this.load();
    });

    this.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy)
    ).subscribe(() => { this.currentPage.set(1); this.load(); });
  }

  ngOnDestroy(): void { this.destroy.next(); this.destroy.complete(); }

  // -- Data -----------------------------------------------------------------
  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const params: LawyerFilterParams = {
      pageNumber: this.currentPage(),
      pageSize:   this.pageSize(),
      search:     this.search.value ?? undefined,
      practiceArea: this.practiceArea() || undefined,
      minRating:    this.minRating() ?? undefined,
    };

    this.svc.getLawyers(params).subscribe({
      next: (res) => {
        this.lawyers.set(res.data.items ?? []);
        this.totalCount.set(res.data.totalCount ?? 0);
        this.totalPages.set(res.data.totalPages ?? 1);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Unable to load lawyers. Please try again.');
        this.loading.set(false);
      }
    });
  }

  // -- Actions ---------------------------------------------------------------
  setPracticeArea(area: string): void {
    this.practiceArea.set(this.practiceArea() === area ? '' : area);
    this.currentPage.set(1);
    this.load();
  }

  setRating(r: number | null): void {
    this.minRating.set(this.minRating() === r ? null : r);
    this.currentPage.set(1);
    this.load();
  }

  setSort(s: 'rating' | 'experience' | 'cases'): void {
    this.sortBy.set(s);
  }

  goToPage(p: number | '...'): void {
    if (p === '...' || p === this.currentPage()) return;
    this.currentPage.set(p as number);
    this.load();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearFilters(): void {
    this.search.setValue('');
    this.practiceArea.set('');
    this.minRating.set(null);
    this.currentPage.set(1);
    this.load();
  }

  toggleFilters(): void { this.filtersOpen.set(!this.filtersOpen()); }

  // -- Helpers ---------------------------------------------------------------
  getLawyerName(l: Lawyer): string {
    return l.fullName || `${l.firstName} ${l.lastName}`.trim();
  }

  getInitials(l: Lawyer): string {
    return `${l.firstName?.[0] ?? ''}${l.lastName?.[0] ?? ''}`.toUpperCase();
  }

  getStars(rating: number): number[] {
    return Array.from({ length: Math.round(rating) });
  }

  formatWinRate(r: number | null): string {
    return r != null ? `${r}%` : '—';
  }

  get sortedLawyers(): Lawyer[] {
    return [...this.lawyers()].sort((a, b) => {
      if (this.sortBy() === 'experience') {
        return (parseInt(b.experience ?? '0') || 0) - (parseInt(a.experience ?? '0') || 0);
      }
      if (this.sortBy() === 'cases') {
        return (b.total_Cases ?? 0) - (a.total_Cases ?? 0);
      }
      return (b.rating ?? 0) - (a.rating ?? 0);
    });
  }

  readonly skeletons = Array(12).fill(0);
}
