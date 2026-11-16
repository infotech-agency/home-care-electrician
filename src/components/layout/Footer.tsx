// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';
// import { business, nearbyServiceAreas } from '@/data/business';
// import ContactButton from '../common/ContactButton';

// export default function Footer() {
//   return (
//     <>
//       <footer>
//         <div className="container footer-grid">
//           <div>
//             <div className="footer-brand">
//               <Image
//                 src="/images/logo.jpeg"
//                 width={76}
//                 height={76}
//                 alt="Home Care Electrician Service"
//               />

//               <h3>
//                 Home Care
//                 <br />
//                 Electrician Service
//               </h3>
//             </div>

//             <p>
//               Electrical repairs, installations and maintenance.
//               At your home, in Malviya Nagar and Hauz Rani.
//             </p>
//           </div>

//           <div>
//             <span className="footer-label">Explore</span>
//             <Link href="/">Home</Link>
//             <Link href="/services/">Our services</Link>
//             <Link href="/contact/">Contact &amp; location</Link>
//           </div>

//           <div>
//             <span className="footer-label">Electrical care</span>

//             <Link href="/services/#wiring-connections">
//               Wiring &amp; connections
//             </Link>

//             <Link href="/services/#fans-lighting">
//               Fans &amp; lighting
//             </Link>

//             <Link href="/services/#repairs-diagnostics">
//               Repairs &amp; diagnostics
//             </Link>

//             <Link href="/services/#home-installations">
//               Home installations
//             </Link>
//           </div>

//           <div>
//             <span className="footer-label">Find us</span>

//             <p>
//               <MapPin size={16} aria-hidden="true" />
//               {business.address}
//             </p>

//             <p>
//               <Clock size={16} aria-hidden="true" />
//               {business.hours}
//             </p>

//             <a href={`tel:${business.phone}`}>
//               <Phone size={16} aria-hidden="true" />
//               {business.phoneDisplay}
//             </a>

//             <a
//               href={business.maps}
//               target="_blank"
//               rel="noreferrer"
//             >
//               Get directions
//               <ArrowUpRight size={15} aria-hidden="true" />
//             </a>
//           </div>
//         </div>

//         <section
//           className="container footer-service-areas"
//           aria-labelledby="footer-areas-heading"
//         >
//           <h2 id="footer-areas-heading">
//             Electrician home visits in nearby areas
//           </h2>

//           <p className="footer-areas-intro">
//             Share your location when contacting us to confirm
//             a home visit.
//           </p>

//           <ul className="footer-area-keywords">
//             {nearbyServiceAreas.map((area) => (
//               <li key={area}>Electrician service in {area}</li>
//             ))}
//           </ul>
//         </section>

//         <div className="container footer-bottom">
//           <span>
//             © {new Date().getFullYear()} Home Care Electrician Service
//           </span>
//           <span>Made for the place you call home.</span>
//         </div>
//       </footer>

//       <div className="floating-actions">
//         <ContactButton compact />
//         <ContactButton kind="whatsapp" compact />
//       </div>
//     </>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';
import { business } from '@/data/business';
import ContactButton from '../common/ContactButton';

const cityGroups = [
  {
    city: 'Delhi',
    areas: [
      'Delhi',
      'Malviya Nagar',
      'Hauz Rani',
      'Saket',
      'Khirki Extension',
      'Khirki Village',
      'Shivalik',
      'Geetanjali Enclave',
      'Greater Kailash',
      'Green Park',
      'Hauz Khas',
      'Lajpat Nagar',
      'Vasant Kunj',
      'Dwarka',
      'Rohini',
      'Janakpuri',
    ],
  },
  {
    city: 'Noida',
    areas: [
      'Noida',
      'Noida Sector 15',
      'Noida Sector 18',
      'Noida Sector 22',
      'Noida Sector 50',
      'Noida Sector 51',
      'Noida Sector 62',
      'Noida Sector 75',
      'Noida Sector 76',
      'Noida Sector 78',
      'Noida Sector 137',
    ],
  },
  {
    city: 'Gurgaon',
    areas: [
      'Gurgaon',
      'DLF Phase 1, Gurgaon',
      'DLF Phase 2, Gurgaon',
      'DLF Phase 3, Gurgaon',
      'DLF Phase 4, Gurgaon',
      'DLF Phase 5, Gurgaon',
      'Sushant Lok, Gurgaon',
      'South City 1, Gurgaon',
      'South City 2, Gurgaon',
      'Golf Course Road, Gurgaon',
      'Sohna Road, Gurgaon',
      'Palam Vihar, Gurgaon',
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <Image
                src="/images/logo.jpeg"
                width={76}
                height={76}
                alt="Home Care Electrician Service"
              />

              <h3>
                Home Care
                <br />
                Electrician Service
              </h3>
            </div>

            <p>
              Electrical repairs, installations and maintenance
              at your home. Contact us to discuss your requirement
              and arrange a visit.
            </p>
          </div>

          <div>
            <span className="footer-label">Explore</span>

            <Link href="/">Home</Link>
            <Link href="/services/">Our services</Link>
            <Link href="/contact/">Contact &amp; location</Link>
          </div>

          <div>
            <span className="footer-label">Electrical care</span>

            <Link href="/services/#wiring-connections">
              Wiring &amp; connections
            </Link>

            <Link href="/services/#fans-lighting">
              Fans &amp; lighting
            </Link>

            <Link href="/services/#repairs-diagnostics">
              Repairs &amp; diagnostics
            </Link>

            <Link href="/services/#home-installations">
              Home installations
            </Link>
          </div>

          <div>
            <span className="footer-label">Find us</span>

            <p>
              <MapPin size={16} aria-hidden="true" />
              {business.address}
            </p>

            <p>
              <Clock size={16} aria-hidden="true" />
              {business.hours}
            </p>

            <a href={`tel:${business.phone}`}>
              <Phone size={16} aria-hidden="true" />
              {business.phoneDisplay}
            </a>

            <a
              href={business.maps}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <section
          className="container footer-ncr"
          aria-labelledby="footer-ncr-heading"
        >
          <h2 id="footer-ncr-heading">
            Electrician Services in Delhi NCR
          </h2>

          <p className="footer-ncr-intro">
            Share your location when contacting us to confirm
            availability and arrange a home visit.
          </p>

          {cityGroups.map(({ city, areas }) => (
            <div className="footer-ncr-city" key={city}>
              <h3>{city}</h3>

              <ul>
                {areas.map((area) => (
                  <li key={area}>
                    Electrician service in {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Home Care Electrician Service
          </span>

          <span>Made for the place you call home.</span>
        </div>
      </footer>

      <div className="floating-actions">
        <ContactButton compact />
        <ContactButton kind="whatsapp" compact />
      </div>
    </>
  );
}