# Frontend design update

The Angular homepage follows the supplied Digital Law Firm reference: navy, ivory and gold, serif headlines, Karachi-inspired architecture, a connected ecosystem, client journey, professional tools, student learning, legal aid, and five audience cards.

## Preview and build

- Run `npm start` from this directory for local development.
- Run `npm run build` to create `dist/kar-web/browser`.
- Production builds download the existing Google Fonts stylesheet and need network access.

## Main files

- `src/app/features/public/home/`: homepage content and responsive section styles.
- `src/app/shared/components/legal-icon/`: shared SVG icon component.
- `src/app/shared/components/portal-preview/`: illustrative HTML/CSS dashboard previews.
- `src/app/shared/components/navbar/` and `footer/`: responsive site navigation and footer.
- `src/styles/_variables.scss`: shared navy and gold theme.

## Connections and limitations

Role-specific signup links preselect Client, Lawyer, Student, or Donor. Unsupported role values fall back to Client. Law-firm enquiries lead to Contact because this application has no law-firm account role. Search uses the lawyer directory's existing `q` parameter. Existing services and authentication remain in place. During browser verification the remote lawyer service returned an unauthorized response, triggering the existing login redirect; live results could not be verified. Dashboard previews are illustrative, not live account data.

Responsive checks covered 320px, 390px, 768px, and desktop. Mobile navigation, section links, student role selection, image loading, and homepage console output were checked.

## Generated image

Asset: `src/assets/images/karachi-legal.jpg` (1536 × 1024). Created with the built-in image generation tool, then converted to JPEG for the website. It is an architectural illustration inspired by Karachi, not documentary photography of a specific building.

Final generation prompt:

> Create a photorealistic editorial architectural photograph for a premium Pakistani legal services website. Wide landscape 1536x1024 or similar. Beautiful historic Karachi Gothic sandstone civic building inspired by Frere Hall, tall central tower, lush date palms, foreground gardens, warm golden late afternoon light, atmospheric deep navy teal shadows, understated elegant color grading, high detail. Building on center-right, left third mostly dark foliage for an overlay. No text, no logos, no graphics, no watermark, no borders. Professional architectural photography, realistic Pakistan setting.
