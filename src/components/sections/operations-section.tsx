import Image from "next/image";

export function OperationsSection() {
  return (
    <section
      id="operations"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Real Screenshot (Reversed layout) */}
        <div
          data-r=""
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="screenshot-frame p-2 sm:p-3 bg-white">
            <div className="relative rounded-xl overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
              <Image
                src="/screenshots/Lab Orders.png"
                alt="Dream Dental operational lab orders tracking system showing crown fabrication statuses and delivery deadlines"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-xl block"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#899193] mt-3 px-2">
            <span>Operations & Lab Management · Tracking & Deliverables</span>
            <span className="font-mono">Lab Orders Roster</span>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-semibold tracking-widest text-[#D9795B] uppercase">
              BEYOND THE CHAIR
            </span>
          </div>

          <h2
            data-r=""
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6 text-balance"
          >
            The clinic doesn&apos;t stop
            <br />
            <span className="font-serif italic font-normal text-[#2F6F6A]">
              at the chair.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            Running an efficient practice requires seamless coordination outside the operatory. Track dental lab cases, maintain clinical inventory levels, and manage procedure fee schedules so your practice never misses a case deadline or runs out of essential materials.
          </p>

          <div
            data-r=""
            className="space-y-4 w-full pt-4 border-t border-[#18252B]/8"
          >
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F6F6A] mt-2 flex-shrink-0" />
              <div>
                <strong className="text-sm font-semibold text-[#18252B] block">Lab Orders Tracking</strong>
                <p className="text-xs sm:text-sm text-[#5F696B]">
                  Monitor crown, bridge, and aligner fabrication stages tied directly to the patient&apos;s upcoming appointment.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F6F6A] mt-2 flex-shrink-0" />
              <div>
                <strong className="text-sm font-semibold text-[#18252B] block">Inventory & Stock Alerts</strong>
                <p className="text-xs sm:text-sm text-[#5F696B]">
                  Real-time stock counts and automatic low-supply warnings for clinical consumables.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F6F6A] mt-2 flex-shrink-0" />
              <div>
                <strong className="text-sm font-semibold text-[#18252B] block">Procedure Fee Catalogs</strong>
                <p className="text-xs sm:text-sm text-[#5F696B]">
                  Standardized dental procedure codes, estimated chair durations, and multi-tier pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
