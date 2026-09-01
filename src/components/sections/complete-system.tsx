export function CompleteSystem() {
  const departments = [
    {
      category: "CLINICAL",
      description: "Chairside patient care, anatomical charting, and diagnostic records.",
      modules: [
        { name: "Patients", detail: "Centralized EHR, medical alerts, and contact records" },
        { name: "Appointments", detail: "Multi-chair operatory scheduling and live queue" },
        { name: "Procedures", detail: "Standardized dental codes and fee catalogs" },
        { name: "Treatment Plans", detail: "Phased restorative plans and cost estimates" },
        { name: "Dental Chart", detail: "Interactive adult & pediatric odontogram" },
        { name: "X-Ray Viewer", detail: "High-resolution DICOM and radiograph diagnostics" },
      ],
    },
    {
      category: "OPERATIONS",
      description: "Managing practice inventory, fabrication cases, and chairside logistics.",
      modules: [
        { name: "Lab Orders", detail: "Case tracking from impression to delivery" },
        { name: "Inventory", detail: "Stock levels, replenishment alerts, and batch tracking" },
      ],
    },
    {
      category: "BUSINESS",
      description: "Financial performance, billing, revenue analytics, and payroll.",
      modules: [
        { name: "Financial", detail: "Point of sale, split invoices, and revenue ledger" },
        { name: "Payroll", detail: "Clinician commission tracking and staff compensation" },
        { name: "Reports", detail: "Executive practice analytics and clinical performance" },
      ],
    },
    {
      category: "SYSTEM",
      description: "Governance, staff permissions, compliance auditing, and configuration.",
      modules: [
        { name: "Users & Roles", detail: "Granular access controls for doctors, staff, and reception" },
        { name: "Attendance", detail: "Staff check-in time tracking and shift scheduling" },
        { name: "Audit Logs", detail: "Immutable records of patient data modifications" },
        { name: "Settings", detail: "Branch setup, invoice templates, and clinic defaults" },
      ],
    },
  ];

  return (
    <section
      id="system"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span
          data-r=""
          className="text-xs font-semibold tracking-widest text-[#2F6F6A] uppercase block mb-3"
        >
          ARCHITECTURAL OVERVIEW
        </span>
        <h2
          data-r=""
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6"
        >
          One system.
          <br />
          <span className="font-serif italic font-normal text-[#2F6F6A]">
            Every department.
          </span>
        </h2>
        <p
          data-r=""
          className="text-lg sm:text-xl text-[#5F696B] leading-relaxed"
        >
          Designed as a unified operating system where clinical notes, front-desk bookings, and back-office accounting share one coherent data architecture.
        </p>
      </div>

      {/* Typography-Driven Architectural Grid */}
      <div
        data-r=""
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4"
      >
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className="flex flex-col border-t border-[#18252B]/15 pt-6"
          >
            {/* Category header */}
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-[#2F6F6A] uppercase block mb-2 font-mono">
                {dept.category}
              </span>
              <p className="text-xs text-[#5F696B] leading-relaxed">
                {dept.description}
              </p>
            </div>

            {/* Modules list */}
            <div className="space-y-4">
              {dept.modules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="group pb-3 border-b border-[#18252B]/6 last:border-0"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-[#18252B] group-hover:text-[#2F6F6A] transition-colors">
                      {mod.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#899193] mt-1 leading-normal">
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
