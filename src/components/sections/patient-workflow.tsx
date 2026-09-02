import Image from "next/image";

export function PatientWorkflow() {
  return (
    <section
      id="workflow"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative Copy */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xl sm:text-2xl font-serif text-[#2F6F6A] font-semibold">
              01
            </span>
            <span className="h-px w-8 bg-[#2F6F6A]/30" />
            <span className="text-xs font-mono font-semibold tracking-wider text-[#5F696B] uppercase">
              Patient Management
            </span>
          </div>

          <h2
            data-r=""
            className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
          >
            Every patient.
            <br />
            <span className="italic text-[#2F6F6A]">
              The complete picture.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            Patient information, comprehensive clinical history, appointments, and active treatments are completely unified. Review vital medical alerts, past clinical notes, radiographic history, and payment ledgers without navigating away from the patient profile.
          </p>

          <div
            data-r=""
            className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[#18252B]/10 text-xs sm:text-sm"
          >
            <div>
              <span className="block font-semibold text-[#18252B] mb-1">
                Centralized Clinical Record
              </span>
              <span className="text-[#5F696B] leading-relaxed">
                Medical conditions, allergy alerts, and prescription logs in one view.
              </span>
            </div>
            <div>
              <span className="block font-semibold text-[#18252B] mb-1">
                Unified Visit History
              </span>
              <span className="text-[#5F696B] leading-relaxed">
                Every consultation, diagnostic image, and chairside note linked chronologically.
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
            <div className="relative rounded-[14px] overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
              <Image
                src="/screenshots/Patient Profile.png"
                alt="Dream Dental patient profile interface showing comprehensive patient demographic data, clinical alerts, and treatment timeline"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-[14px] block"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#899193] mt-4 px-2">
            <span>Patient Profile · Clinical History & Treatment Context</span>
            <span className="font-mono">Live Interface</span>
          </div>
        </div>
      </div>
    </section>
  );
}
