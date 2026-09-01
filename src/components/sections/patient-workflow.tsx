import Image from "next/image";

export function PatientWorkflow() {
  return (
    <section
      id="workflow"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Storytelling Copy */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-2xl sm:text-3xl font-serif text-[#2F6F6A] font-semibold">
              01
            </span>
            <span className="h-px w-8 bg-[#2F6F6A]/30" />
            <span className="text-xs font-semibold tracking-wider text-[#5F696B] uppercase">
              Patient Management
            </span>
          </div>

          <h2
            data-r=""
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6 text-balance"
          >
            Every patient.
            <br />
            <span className="font-serif italic font-normal text-[#2F6F6A]">
              The complete picture.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            From patient information to clinical history, appointments and treatments, everything stays connected. Access medical alerts, ongoing treatment plans, past radiographs, and insurance balances with zero tab switching.
          </p>

          <div
            data-r=""
            className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#18252B]/8 text-xs sm:text-sm text-[#18252B]"
          >
            <div>
              <span className="block font-semibold text-[#18252B] mb-0.5">Comprehensive EHR</span>
              <span className="text-[#5F696B]">Medical history & alerts</span>
            </div>
            <div>
              <span className="block font-semibold text-[#18252B] mb-0.5">Connected Timeline</span>
              <span className="text-[#5F696B]">Every visit & note synced</span>
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
                src="/screenshots/Patient Profile.png"
                alt="Dream Dental patient profile view with patient demographics, clinical status, and medical history"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-xl block"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#899193] mt-3 px-2">
            <span>Patient Profile View · Demographic & Clinical Overview</span>
            <span className="font-mono">Record #2084</span>
          </div>
        </div>
      </div>
    </section>
  );
}
