import Image from "next/image";

export function AppointmentsSection() {
  return (
    <section
      id="appointments"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Real Screenshot (Reversed Layout) */}
        <div
          data-r=""
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="screenshot-frame p-2 sm:p-3 bg-white">
            <div className="relative rounded-xl overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
              <Image
                src="/screenshots/Appointments.png"
                alt="Dream Dental appointments scheduling calendar with multi-chair timeline and practitioner roster"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-xl block"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#899193] mt-3 px-2">
            <span>Appointments & Scheduling · Multi-chair Operatory Roster</span>
            <span className="font-mono">Daily Schedule</span>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
          <div
            data-r=""
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-2xl sm:text-3xl font-serif text-[#2F6F6A] font-semibold">
              02
            </span>
            <span className="h-px w-8 bg-[#2F6F6A]/30" />
            <span className="text-xs font-semibold tracking-wider text-[#5F696B] uppercase">
              Schedule & Operatories
            </span>
          </div>

          <h2
            data-r=""
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6 text-balance"
          >
            The day,
            <br />
            <span className="font-serif italic font-normal text-[#2F6F6A]">
              organised.
            </span>
          </h2>

          <p
            data-r=""
            className="text-base sm:text-lg text-[#5F696B] leading-relaxed mb-8"
          >
            Appointments, schedules and patient visits without switching between systems. See doctor availability, chair allocations, appointment statuses, and pending procedures at a glance.
          </p>

          <div
            data-r=""
            className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#18252B]/8 text-xs sm:text-sm text-[#18252B]"
          >
            <div>
              <span className="block font-semibold text-[#18252B] mb-0.5">Operatory Allocation</span>
              <span className="text-[#5F696B]">Assign chairs & hygienists</span>
            </div>
            <div>
              <span className="block font-semibold text-[#18252B] mb-0.5">Live Queue Status</span>
              <span className="text-[#5F696B]">Checked-in, seated, completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
