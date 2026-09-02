import Image from "next/image";

export function AppointmentsSection() {
  return (
    <section
      id="appointments"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Real Screenshot (Reversed layout for visual rhythm) */}
        <div
          data-r=""
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="screenshot-frame p-2 sm:p-3.5 bg-white">
            <div className="relative rounded-[14px] overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
              <Image
                src="/screenshots/Appointments.png"
                alt="Dream Dental daily appointment schedule showing multi-chair operatory timeline, doctor rosters, and patient arrival statuses"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-[14px] block"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#899193] mt-4 px-2">
            <span>Operatory Schedule · Multi-Chair Daily Timeline</span>
            <span className="font-mono">Live Roster</span>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xl sm:text-2xl font-serif text-[#2F6F6A] font-semibold">
              02
            </span>
            <span className="h-px w-8 bg-[#2F6F6A]/30" />
            <span className="text-xs font-mono font-semibold tracking-wider text-[#5F696B] uppercase">
              Schedule & Operatories
            </span>
          </div>

          <h2
            data-r=""
            className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
          >
            The day,
            <br />
            <span className="italic text-[#2F6F6A]">
              organised.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            Manage chairside allocations, specialist availability, and patient flow with effortless clarity. Keep front-desk reception and clinical operatories synchronized so every provider knows who is in the waiting lounge, who is seated, and who is ready for treatment.
          </p>

          <div
            data-r=""
            className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[#18252B]/10 text-xs sm:text-sm"
          >
            <div>
              <span className="block font-semibold text-[#18252B] mb-1">
                Operatory Multi-View
              </span>
              <span className="text-[#5F696B] leading-relaxed">
                Visual chair allocations with real-time appointment status updates.
              </span>
            </div>
            <div>
              <span className="block font-semibold text-[#18252B] mb-1">
                Procedure Timing
              </span>
              <span className="text-[#5F696B] leading-relaxed">
                Estimated duration thresholds to avoid double-bookings and chair overrun.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
