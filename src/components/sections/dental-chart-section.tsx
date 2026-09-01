import Image from "next/image";

export function DentalChartSection() {
  return (
    <section
      id="chairside"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 bg-[#214F4B] text-[#F6F4EF] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          {/* Section Eyebrow */}
          <div
            data-r=""
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-[#DCEBE7] uppercase mb-6"
          >
            <span>SIGNATURE CLINICAL MODULE</span>
            <span className="text-white/40">·</span>
            <span>INTERACTIVE ODONTOGRAM</span>
          </div>

          <h2
            data-r=""
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-balance"
          >
            Built for the work
            <br />
            <span className="font-serif italic font-normal text-[#DCEBE7]">
              that happens chairside.
            </span>
          </h2>

          <p
            data-r=""
            className="text-lg sm:text-xl text-[#DCEBE7]/85 leading-relaxed font-light"
          >
            Dream Dental is purpose-built for dentistry from the anatomical core. Interactive tooth charting, surface-level condition mapping, adult and pediatric numbering systems, and treatment plan generation in seconds.
          </p>
        </div>

        {/* Major Signature Visual */}
        <div
          data-r=""
          className="relative w-full"
        >
          <div className="screenshot-frame-dark p-2 sm:p-4 bg-[#18252B]/80 border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
            <div className="relative rounded-xl overflow-hidden bg-[#18252B] border border-white/10">
              <Image
                src="/screenshots/Dental chart.png"
                alt="Dream Dental interactive dental charting odontogram showing adult teeth mapping, surface conditions, and procedure notes"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-xl block"
              />
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 pt-10 border-t border-white/15">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#DCEBE7] block mb-1">
                FDI & Universal
              </span>
              <p className="text-sm text-white/80 leading-relaxed">
                Seamless switching between international dental notation systems for adult and primary dentition.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#DCEBE7] block mb-1">
                Surface-Level Mapping
              </span>
              <p className="text-sm text-white/80 leading-relaxed">
                Color-coded charting for restorative work, endodontics, crowns, implants, and periodontal pockets.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#DCEBE7] block mb-1">
                Chairside Speed
              </span>
              <p className="text-sm text-white/80 leading-relaxed">
                Log procedures and generate phased treatment estimates in fewer clicks without slowing down treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
