import Image from "next/image";
import { certificates } from "../data";

export function CertificatesSection() {
  const formalCertificates = certificates.slice(0, 3);
  const milestones = certificates.slice(3);

  return (
    <section className="certificate-section section-shell" id="certificates">
      <div className="certificate-intro reveal">
        <p className="eyebrow">
          <span>03</span> proof of practice
        </p>
        <h2>
          Credentials,
          <br />
          <em>and milestones.</em>
        </h2>
        <p>
          The programmes, products, and rooms where I have learned, built, and
          shared the work.
        </p>
      </div>
      <div className="certificate-stack">
        {formalCertificates.map((certificate, index) => (
          <div
            className={`certificate-card certificate-${index + 1} reveal`}
            key={certificate.name}
          >
            <CertificatePreview certificate={certificate} />
            <CertificateDetails certificate={certificate} index={index} />
          </div>
        ))}
      </div>
      <div className="milestone-group">
        <p className="milestone-heading">Selected milestones</p>
        <div className="milestone-grid">
          {milestones.map((certificate, index) => (
            <div
              className={`certificate-card achievement-card certificate-${index + 4} reveal`}
              key={certificate.name}
            >
              <CertificatePreview certificate={certificate} />
              <CertificateDetails certificate={certificate} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatePreview({
  certificate,
}: {
  certificate: (typeof certificates)[number];
}) {
  return (
    <div className="certificate-preview">
      {certificate.image ? (
        <Image
          src={certificate.image}
          alt={certificate.alt}
          fill
          sizes="(max-width: 800px) 96px, 128px"
        />
      ) : (
        <span className="certificate-placeholder">image slot</span>
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
