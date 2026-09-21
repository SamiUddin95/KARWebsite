export interface Lawyer {
  id: number;
  firstName: string;
  lastName: string;
  fullName?: string;
  phone: string;
  email: string;
  biography: string;
  description: string;
  rating: number;
  reviews: number;
  profilePhoto: string | null;
  status: string | null;
  experience: string | null;
  total_Cases: number | null;
  win_Rate: number | null;
  active_Cases: number | null;
  expertise: string | null;
  office_hours: string | null;
  isActive: boolean;
  userId?: number | null;
  createdBy: string;
  createdOn: string;
  updatedBy: string;
  updatedOn: string;
}

export interface LawyerListResponse {
  status: string;
  data: {
    items: Lawyer[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
  statusCode: number;
  errorMessage: string | null;
}

export interface LawyerResponse {
  status: string;
  data: Lawyer;
  statusCode: number;
  errorMessage: string | null;
}

export interface LawyerFilterParams {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  practiceArea?: string;
  city?: string;
  minRating?: number;
  consultationType?: string;
}
