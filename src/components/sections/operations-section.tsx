import Image from "next/image";

export function OperationsSection() {
  const operationsModules = [
    {
      title: "Lab Orders Tracking",
      description:
        "Track crown, bridge, implant abutment, and aligner fabrication stages tied directly to the patient's appointment calendar.",
    },
    {
      title: "Consumables Inventory",
      description:
        "Monitor chairside materials, composite resins, bonding agents, and anesthetics with real-time low-stock alerts.",
    },
    {
      title: "Procedure Catalogs",
      description:
        "Standardize clinical dental codes, estimated operatory durations, and chair pricing across all practitioners.",
    },
  ];

  return (
    <section
      id="operations"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Real Screenshot (Reversed layout) */}
        <div
          data-r=""
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="screenshot-frame p-2 sm:p-3.5 bg-white">
            <div className="relative rounded-[14px] overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
              <Image
                src="/screenshots/Lab Orders.png"
                alt="Dream Dental clinical lab orders management dashboard showing prosthesis fabrication statuses, laboratory partners, and delivery deadlines"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-[14px] block"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#899193] mt-4 px-2">
            <span>Clinic Operations · External Dental Lab Case Tracker</span>
            <span className="font-mono">Logistics & Supply</span>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#D9795B] uppercase">
              CLINIC OPERATIONS
            </span>
          </div>

          <h2
            data-r=""
            className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
          >
            The clinic doesn&apos;t stop
            <br />
            <span className="italic text-[#2F6F6A]">
              at the chair.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            A well-run practice depends on what happens between appointments. Coordinate external dental lab orders, track chairside supply stock, and maintain structured procedure fee catalogs so treatments proceed without unexpected delays or missing prosthetics.
          </p>

          <div
            data-r=""
            className="space-y-4 w-full pt-6 border-t border-[#18252B]/10"
          >
            {operationsModules.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-mono font-semibold text-[#18252B] uppercase tracking-wider mb-1">
                  {item.title}
                </span>
                <p className="text-sm text-[#5F696B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
