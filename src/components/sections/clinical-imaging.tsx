import Image from "next/image";

export function ClinicalImaging() {
  return (
    <section
      id="imaging"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Copy */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xl sm:text-2xl font-serif text-[#54799A] font-semibold">
              03
            </span>
            <span className="h-px w-8 bg-[#54799A]/30" />
            <span className="text-xs font-mono font-semibold tracking-wider text-[#54799A] uppercase">
              Imaging & Diagnostics
            </span>
          </div>

          <h2
            data-r=""
            className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
          >
            See the
            <br />
            <span className="italic text-[#54799A]">
              full picture.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            Radiographs and diagnostic imaging belong right next to the treatment plan. View bitewings, periapical films, panoramic scans, and intraoral photography directly within the clinical workspace with high-resolution zooming, contrast adjustments, and tooth-by-tooth indexing.
          </p>

          <div
            data-r=""
            className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[#18252B]/10 text-xs sm:text-sm"
          >
            <div>
              <span className="block font-semibold text-[#18252B] mb-1">
                Zero Window Switching
              </span>
              <span className="text-[#5F696B] leading-relaxed">
                Images load immediately inside the patient profile during consultation.
              </span>
            </div>
            <div>
              <span className="block font-semibold text-[#18252B] mb-1">
                Radiographic Comparison
              </span>
              <span className="text-[#5F696B] leading-relaxed">
                Side-by-side evaluation to track bone levels and restoration longevity.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Real Product Screenshot */}
        <div
          data-r=""
          className="lg:col-span-7"
        >
          <div className="screenshot-frame p-2 sm:p-3.5 bg-white">
            <div className="relative rounded-[14px] overflow-hidden bg-[#18252B] border border-[#18252B]/8">
              <Image
                src="/screenshots/X ray viewer.png"
                alt="Dream Dental clinical X-ray radiograph viewer showing tooth scans, diagnostics, and high-definition periapical imagery"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-[14px] block"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#899193] mt-4 px-2">
            <span>Diagnostic Imaging Suite · Radiographic Inspection</span>
            <span className="font-mono">High-Definition Viewer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
