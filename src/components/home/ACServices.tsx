import Image from 'next/image';
import {
  Snowflake,
  Wrench,
  Wind,
  Droplets,
  Gauge,
  Settings2,
} from 'lucide-react';

import ContactButton from '@/components/common/ContactButton';
import Reveal from '@/components/common/Reveal';

function photo(id: number) {
  return (
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg` +
    '?auto=compress&cs=tinysrgb&w=900'
  );
}

const acServices = [
  {
    title: 'AC servicing & cleaning',
    description:
      'Cleaning and maintenance for filters, coils and other accessible parts to address dust buildup and airflow issues.',
    image: photo(32588555),
    alt: 'Technician performing air conditioner maintenance',
    icon: Wind,
  },
  {
    title: 'AC repair & fault diagnosis',
    description:
      'Inspection for cooling problems, unusual sounds, starting issues and other faults before discussing the required repair.',
    image: photo(5463580),
    alt: 'Technician repairing an air conditioning unit',
    icon: Wrench,
  },
  {
    title: 'AC installation & removal',
    description:
      'Discuss installation, uninstallation or shifting requirements, including unit placement, piping and electrical connections.',
    image: photo(7347538),
    alt: 'Technician working on a wall-mounted outdoor AC unit',
    icon: Settings2,
  },
  {
    title: 'AC gas refill & leak checks',
    description:
      'Refrigerant pressure and leak checks for cooling complaints. Refilling requirements depend on the inspection and AC specifications.',
    image: photo(5463575),
    alt: 'Technician checking an air conditioner with a manifold gauge',
    icon: Gauge,
  },
  {
    title: 'AC water leakage repair',
    description:
      'Inspection of drainage, blockages and related causes when water drips from your indoor AC unit.',
    image: photo(16592625),
    alt: 'Wall-mounted indoor air conditioner in a home',
    icon: Droplets,
  },
  {
    title: 'AC cooling & airflow issues',
    description:
      'Assessment for weak airflow, uneven cooling or an AC that runs without cooling the room properly.',
    image: photo(5463587),
    alt: 'Repair technician inspecting an outdoor air conditioning unit',
    icon: Snowflake,
  },
];

export default function ACServices() {
  return (
    <section
      id="ac-services"
      className="ac-services"
      aria-labelledby="ac-services-heading"
    >
      <div className="container">
        <div className="ac-services-heading">
          <div>
            <span className="ac-services-eyebrow">
              <Snowflake size={17} aria-hidden="true" />
              AIR CONDITIONER SERVICES
            </span>

            <h2 id="ac-services-heading">
              Bring comfort
              <br />
              <span>back home.</span>
            </h2>
          </div>

          <p>
            Not cooling? Leaking water? Planning an installation?
            Share your AC type and the issue to discuss the
            service and arrange a visit.
          </p>
        </div>

        <div className="ac-services-grid">
          {acServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                className="ac-service-card"
                delay={(index % 3) * 65}
              >
                <div className="ac-service-image">
                  <Image
                    src={service.image}
                    alt={`${service.alt}, illustrative stock photograph`}
                    fill
                    unoptimized
                    sizes="(max-width: 560px) 100vw,
                           (max-width: 1000px) 50vw,
                           33vw"
                  />

                  <span className="ac-service-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <article className="ac-service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="ac-service-actions">
                    <ContactButton
                      kind="call"
                      service={service.title}
                      compact
                    />

                    <ContactButton
                      kind="whatsapp"
                      service={service.title}
                      compact
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="ac-services-bottom">
          <div>
            <strong>Not sure what your AC needs?</strong>

            <p>
              Share the brand, model and symptoms. Service scope,
              visit timing and charges can be discussed before booking.
            </p>
          </div>

          <ContactButton
            kind="whatsapp"
            service="help with my air conditioner"
          />
        </div>
      </div>
    </section>
  );
}