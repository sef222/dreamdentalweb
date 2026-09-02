export function Security() {
  const securityPillars = [
    {
      label: "PATIENT RECORDS",
      title: "Patient Records Governance",
      description:
        "Medical histories, anatomical tooth charts, and radiographic scans are stored in structured, protected clinical schemas designed for medical data consistency.",
    },
    {
      label: "ACCESS MANAGEMENT",
      title: "Role-Based Access Controls",
      description:
        "Define exact permission tiers for primary dentists, associate practitioners, dental assistants, receptionists, and accountants to safeguard sensitive clinic records.",
    },
    {
      label: "ACTIVITY TRACKING",
      title: "Immutable Audit Logs",
      description:
        "Every addition to a dental chart, alteration to an appointment status, or payment collected logs an immutable, timestamped user record.",
    },
    {
      label: "STRUCTURED DATA",
      title: "Resilient Structured Backups",
      description:
        "Automated continuous database backups and encrypted cloud persistence protect your clinic against local computer failures and data loss.",
    },
  ];

  return (
    <section
      id="security"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      <div className="max-w-3xl mb-16 sm:mb-24">
        <span
          data-r=""
          className="text-xs font-mono font-semibold tracking-[0.2em] text-[#5F696B] uppercase block mb-4"
        >
          DATA INTEGRITY & SECURITY
        </span>
        <h2
          data-r=""
          className="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
        >
          Your clinic&apos;s information,
          <br />
          <span className="italic text-[#2F6F6A]">
            organised and protected.
          </span>
        </h2>
        <p
          data-r=""
          className="text-lg sm:text-xl text-[#5F696B] leading-relaxed max-w-2xl text-balance"
        >
          A medical clinic demands absolute dependability. Dream Dental keeps clinical charts, diagnostics, and financial records disciplined, secure, and auditable.
        </p>
      </div>

      <div
        data-r=""
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {securityPillars.map((pillar, index) => (
          <div
            key={index}
            className="p-8 sm:p-10 rounded-2xl bg-white border border-[#18252B]/12 shadow-[0_24px_60px_rgba(24,37,43,0.04)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F6F6A] uppercase">
                  {pillar.label}
                </span>
                <span className="text-xs font-mono text-[#899193]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#18252B] mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#5F696B] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
