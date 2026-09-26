"use client";

import Image from "next/image";
import { certificates } from "../data";

export function CertificatesSection() {
  const formalCertificates = certificates.slice(0, 3);
  const milestones = certificates.slice(3);

  return (
    <section className="certificate-section section-shell" id="certificates">
      <div className="certificate-intro reveal">
        <p className="eyebrow">[ SAVE POINTS ]</p>
        <h2>
          PROGRESS<br /><em>SAVED.</em>
        </h2>
        <p>
          The programmes, products, and rooms where I learned, built, and
          shared the work. It fills you with determination.
        </p>
      </div>
      <div className="certificate-stack">
        {formalCertificates.map((certificate, index) => (
          <article
            className={`certificate-card certificate-${index + 1} reveal`}
            key={certificate.name}
          >
            <CertificatePreview certificate={certificate} />
            <CertificateDetails certificate={certificate} index={index} />
          </article>
        ))}
      </div>
      <div className="milestone-group">
        <p className="milestone-heading">* SELECTED MILESTONES</p>
        <div className="milestone-grid">
          {milestones.map((certificate, index) => (
            <article
              className={`certificate-card achievement-card certificate-${index + 4} reveal`}
              key={certificate.name}
            >
              <CertificatePreview certificate={certificate} isMilestone />
              <CertificateDetails certificate={certificate} index={index + 3} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatePreview({
  certificate,
  isMilestone = false,
}: {
  certificate: (typeof certificates)[number];
  isMilestone?: boolean;
}) {
  return (
    <div className="certificate-preview">
      {certificate.image ? (
        <a
          href={certificate.image}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${certificate.name} image at full size (opens in a new tab)`}
        >
          <Image
            src={certificate.image}
            alt={certificate.alt}
            fill
            sizes={isMilestone
              ? "(max-width: 800px) calc(100vw - 70px), (max-width: 1240px) 30vw, 352px"
              : "(max-width: 800px) 80px, 104px"}
          />
        </a>
      ) : (
        <span className="certificate-placeholder">{certificate.name}</span>
      )}
    </div>
  );
}

function CertificateDetails({
  certificate,
  index,
}: {
  certificate: (typeof certificates)[number];
  index: number;
}) {
  return (
    <>
      <span>
        <small>{certificate.label}</small>
        {certificate.href ? (
          <a href={certificate.href} target="_blank" rel="noreferrer">
            <strong>{certificate.name}</strong>
          </a>
        ) : (
          <strong>{certificate.name}</strong>
        )}
        <small>{certificate.issuer}</small>
        <small>{certificate.status}</small>
      </span>
      <span className="certificate-index">0{index + 1}</span>
    </>
  );
}
