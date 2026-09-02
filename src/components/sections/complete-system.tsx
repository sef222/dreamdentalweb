export function CompleteSystem() {
  const departments = [
    {
      category: "CLINICAL",
      description: "Chairside patient care, anatomical charting, and diagnostic evaluation.",
      modules: [
        { name: "Patients", detail: "Centralized EHR with clinical alerts and personal history" },
        { name: "Appointments", detail: "Multi-operatory chair scheduling and live queue tracking" },
        { name: "Procedures", detail: "Standardized dental procedure codes and chair duration" },
        { name: "Treatment Plans", detail: "Phased restorative plans with itemized patient estimates" },
        { name: "Dental Chart", detail: "Interactive adult & pediatric odontogram with surface mapping" },
        { name: "X-Ray Viewer", detail: "High-resolution radiographic diagnostic inspection" },
      ],
    },
    {
      category: "OPERATIONS",
      description: "Practice inventory replenishment, fabrication tracking, and chairside supplies.",
      modules: [
        { name: "Lab Orders", detail: "Tracking prosthetic cases from impression to seat" },
        { name: "Inventory", detail: "Stock levels, replenishment thresholds, and batch expiry alerts" },
      ],
    },
    {
      category: "BUSINESS",
      description: "Practice financial health, automated billing, and clinician performance.",
      modules: [
        { name: "Financial", detail: "Itemized invoices, split payments, and revenue ledgers" },
        { name: "Payroll", detail: "Clinician production tracking and commission accounting" },
        { name: "Reports", detail: "Executive practice analytics and operational throughput" },
      ],
    },
    {
      category: "SYSTEM",
      description: "Security governance, staff permissions, compliance auditing, and practice settings.",
      modules: [
        { name: "Users", detail: "Role-based access controls for doctors, staff, and reception" },
        { name: "Attendance", detail: "Staff shift schedules and practice attendance logging" },
        { name: "Audit Logs", detail: "Immutable records of patient record and billing updates" },
        { name: "Settings", detail: "Branch configurations, operatory setup, and clinic defaults" },
      ],
    },
  ];

  return (
    <section
      id="system"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      <div className="max-w-3xl mb-16 sm:mb-24">
        <span
          data-r=""
          className="text-xs font-mono font-semibold tracking-[0.2em] text-[#2F6F6A] uppercase block mb-4"
        >
          ARCHITECTURAL SYSTEM OVERVIEW
        </span>
        <h2
          data-r=""
          className="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
        >
          One system.
          <br />
          <span className="italic text-[#2F6F6A]">
            Every department.
          </span>
        </h2>
        <p
          data-r=""
          className="text-lg sm:text-xl text-[#5F696B] leading-relaxed max-w-2xl text-balance"
        >
          Designed as a single unified clinical operating system. Clinical charting, front-desk bookings, lab logistics, and executive bookkeeping share one cohesive data architecture.
        </p>
      </div>

      {/* Typography-Driven Architectural Matrix */}
      <div
        data-r=""
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
      >
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className="flex flex-col border-t border-[#18252B]/15 pt-8"
          >
            {/* Category Header */}
            <div className="mb-8">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2F6F6A] uppercase block mb-3">
                {dept.category}
              </span>
              <p className="text-xs text-[#5F696B] leading-relaxed">
                {dept.description}
              </p>
            </div>

            {/* Modules List */}
            <div className="space-y-6">
              {dept.modules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="pb-4 border-b border-[#18252B]/6 last:border-0 last:pb-0"
                >
                  <h3 className="text-sm font-semibold text-[#18252B] mb-1">
                    {mod.name}
                  </h3>
                  <p className="text-xs text-[#899193] leading-normal">
                    {mod.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
