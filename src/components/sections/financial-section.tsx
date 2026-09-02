import Image from "next/image";

export function FinancialSection() {
  const financialHighlights = [
    {
      title: "Invoices",
      detail: "Generate itemized invoices directly from completed chairside procedures with insurance splits.",
    },
    {
      title: "Payments",
      detail: "Track multi-part payment plans, deposits, cash registers, and electronic card payments.",
    },
    {
      title: "Revenue",
      detail: "Monitor real-time daily practice collection totals and provider production figures.",
    },
    {
      title: "Reports",
      detail: "Automate doctor commission calculations, tax summaries, and executive practice analytics.",
    },
  ];

  return (
    <section
      id="financial"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 bg-[#ECE9E2] text-[#18252B] border-t border-[#18252B]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div
              data-r=""
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xl sm:text-2xl font-serif text-[#2F6F6A] font-semibold">
                04
              </span>
              <span className="h-px w-8 bg-[#2F6F6A]/30" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#5F696B] uppercase">
                Practice Business Suite
              </span>
            </div>

            <h2
              data-r=""
              className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
            >
              Know what&apos;s happening
              <br />
              <span className="italic text-[#2F6F6A]">
                beyond the treatment room.
              </span>
            </h2>

            <p
              data-r=""
              className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
            >
              Maintain total command of your clinic&apos;s financial health. Dream Dental synchronizes completed clinical procedures with invoices, split payments, clinician commission structures, and ledger reports—eliminating disjointed accounting books.
            </p>

            <div
              data-r=""
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full pt-6 border-t border-[#18252B]/12 text-xs sm:text-sm"
            >
              {financialHighlights.map((item, idx) => (
                <div key={idx}>
                  <span className="block font-mono font-semibold text-[#18252B] uppercase tracking-wider mb-1">
                    {item.title}
                  </span>
                  <span className="text-[#5F696B] leading-relaxed block text-xs">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Real Screenshot */}
          <div
            data-r=""
            className="lg:col-span-7"
          >
            <div className="screenshot-frame p-2 sm:p-3.5 bg-white">
              <div className="relative rounded-[14px] overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
                <Image
                  src="/screenshots/Financial.png"
                  alt="Dream Dental practice financial ledger interface showing invoice generation, daily payments reconciliation, and revenue metrics"
                  width={2560}
                  height={1440}
                  quality={95}
                  className="w-full h-auto object-cover rounded-[14px] block"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#899193] mt-4 px-2">
              <span>Financial Management · Revenue Ledger & Invoicing</span>
              <span className="font-mono">Business Suite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
