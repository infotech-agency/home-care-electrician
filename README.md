# Home Care Electrician Service

Next.js App Router, TypeScript, Tailwind CSS and Lucide React. Three static-exportable pages: Home, Services and Contact.

## Run
npm install
npm run dev
npm run build

## Activate contact links
Edit `src/data/business.ts`. Set `phone` to the actual E.164 number, update `phoneDisplay`, then set `contactReady: true`. The placeholder intentionally opens a notice instead of contacting an unrelated person. Update `origin` when moving domains. Rebuild after changes.

All services are maintained in `src/data/services.ts`. The logo is the supplied original file. Reviews are omitted because no reviews were supplied. Business hours describe the listing, not a guaranteed response time. The address-based Google Maps embed should be checked against the exact business pin before public launch.

## Photography
Illustrative stock photography, not photos of this business. Pexels: Ranjeet, photo 27928762 (https://www.pexels.com/photo/a-man-is-working-on-an-electrical-panel-27928762/); Bulat843, photo 34054464 (https://www.pexels.com/photo/electrician-diagnosing-electrical-panel-with-multimeter-34054464/). Pexels free-use license.

## Service photography update
All service cards now include illustrative stock photos and Call / WhatsApp actions. Additional Pexels photo IDs: 3616745, 5691589, 4030028, 3804120, 29744511, 8381832, 5691602, 36085816, 7706400, 9679179, 10871737, 5691588. Each asset is stored locally under public/images/services. WhatsApp SVG uses the Simple Icons brand path (CC0), with branding belonging to WhatsApp.

Typography: Plus Jakarta Sans headings and DM Sans body. Motion uses CSS and IntersectionObserver, with reduced-motion support.
