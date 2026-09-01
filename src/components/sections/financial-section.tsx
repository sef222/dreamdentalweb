import Image from "next/image";

export function FinancialSection() {
  return (
    <section
      id="financial"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 bg-[#ECE9E2] text-[#18252B] border-t border-[#18252B]/8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div
              data-r=""
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-2xl sm:text-3xl font-serif text-[#2F6F6A] font-semibold">
                04
              </span>
              <span className="h-px w-8 bg-[#2F6F6A]/30" />
              <span className="text-xs font-semibold tracking-wider text-[#5F696B] uppercase">
                Practice Business Suite
              </span>
            </div>

            <h2
              data-r=""
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6 text-balance"
            >
              Know what&apos;s happening
              <br />
              <span className="font-serif italic font-normal text-[#2F6F6A]">
                beyond the treatment room.
              </span>
            </h2>

            <p
              data-r=""
              className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
            >
              Dream Dental handles the business foundation of your practice with clarity and precision. Track invoices, split payments, clinician commission structures, daily cash registers, and executive revenue reporting without needing external bookkeeping software.
            </p>

            <div
              data-r=""
              className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#18252B]/10 text-xs sm:text-sm text-[#18252B]"
            >
              <div>
                <span className="block font-semibold text-[#18252B] mb-0.5">Invoices & Payments</span>
                <span className="text-[#5F696B]">Installments, cash & card reconciliation</span>
              </div>
              <div>
                <span className="block font-semibold text-[#18252B] mb-0.5">Revenue & Reports</span>
                <span className="text-[#5F696B]">Daily sales, doctor earnings & margins</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Screenshot */}
          <div
            data-r=""
            className="lg:col-span-7"
          >
            <div className="screenshot-frame p-2 sm:p-3 bg-white">
              <div className="relative rounded-xl overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
                <Image
                  src="/screenshots/Financial.png"
                  alt="Dream Dental practice financial ledger showing patient billing, invoices, daily revenue analytics, and transaction records"
                  width={2560}
                  height={1440}
                  quality={95}
                  className="w-full h-auto object-cover rounded-xl block"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#899193] mt-3 px-2">
              <span>Financial Management · Revenue Ledger & Invoicing</span>
              <span className="font-mono">Business Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
