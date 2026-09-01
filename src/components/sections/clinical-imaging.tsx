import Image from "next/image";

export function ClinicalImaging() {
  return (
    <section
      id="imaging"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Copy */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-2xl sm:text-3xl font-serif text-[#54799A] font-semibold">
              03
            </span>
            <span className="h-px w-8 bg-[#54799A]/30" />
            <span className="text-xs font-semibold tracking-wider text-[#54799A] uppercase">
              Imaging & Diagnostics
            </span>
          </div>

          <h2
            data-r=""
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6 text-balance"
          >
            See the
            <br />
            <span className="font-serif italic font-normal text-[#54799A]">
              full picture.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            Keep patient imaging accessible directly within the clinical workflow. Periapical, bitewing, panoramic radiographs and intraoral photography stay organized under the patient&apos;s chart with built-in measurement and side-by-side comparison tools.
          </p>

          <div
            data-r=""
            className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#18252B]/8 text-xs sm:text-sm text-[#18252B]"
          >
            <div>
              <span className="block font-semibold text-[#18252B] mb-0.5">High-Res DICOM</span>
              <span className="text-[#5F696B]">Crystal clear radiographic zoom</span>
            </div>
            <div>
              <span className="block font-semibold text-[#18252B] mb-0.5">Direct Chart Link</span>
              <span className="text-[#5F696B]">Indexed by tooth and treatment plan</span>
            </div>
          </div>
        </div>

        {/* Right Column: Real Screenshot */}
        <div
          data-r=""
          className="lg:col-span-7"
        >
          <div className="screenshot-frame p-2 sm:p-3 bg-white">
            <div className="relative rounded-xl overflow-hidden bg-[#18252B] border border-[#18252B]/8">
              <Image
                src="/screenshots/X ray viewer.png"
                alt="Dream Dental clinical X-ray radiograph viewer showing tooth scans and diagnostic tools"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-xl block"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#899193] mt-3 px-2">
            <span>Clinical Imaging Viewer · Radiographs & Diagnostics</span>
            <span className="font-mono">DICOM & 2D Scans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
