export function Security() {
  const securityPoints = [
    {
      title: "Patient Records Governance",
      description:
        "Medical histories, charting logs, and radiographic scans are stored in structured, tamper-evident records compliant with healthcare privacy regulations.",
    },
    {
      title: "Granular Access Management",
      description:
        "Define exact permission tiers for primary dentists, associates, dental assistants, receptionists, and accountants to safeguard sensitive clinic finances.",
    },
    {
      title: "Immutable Activity Tracking",
      description:
        "Every change to a dental chart, appointment status, or payment record generates an auditable timestamped event log.",
    },
    {
      title: "Structured Clinic Backups",
      description:
        "Automated continuous cloud backups and cryptographic data isolation protect your clinic against local hardware failures or data corruption.",
    },
  ];

  return (
    <section
      id="security"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span
          data-r=""
          className="text-xs font-semibold tracking-widest text-[#5F696B] uppercase block mb-3 font-mono"
        >
          DATA INTEGRITY & COMPLIANCE
        </span>
        <h2
          data-r=""
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6"
        >
          Your clinic&apos;s information,
          <br />
          <span className="font-serif italic font-normal text-[#2F6F6A]">
            organised and protected.
          </span>
        </h2>
        <p
          data-r=""
          className="text-lg sm:text-xl text-[#5F696B] leading-relaxed"
        >
          Healthcare technology demands absolute reliability. Dream Dental is built with patient data confidentiality, structured schema design, and enterprise-grade resilience.
        </p>
      </div>

      <div
        data-r=""
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {securityPoints.map((point, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#18252B]/8 shadow-sm"
          >
            <span className="text-xs font-mono font-semibold text-[#2F6F6A] block mb-3">
              0{index + 1}
            </span>
            <h3 className="text-xl font-semibold text-[#18252B] mb-3">
              {point.title}
            </h3>
            <p className="text-sm text-[#5F696B] leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
