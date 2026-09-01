import { ArrowRight, Check } from "lucide-react";

export function ProblemSection() {
  const fragmentedItems = [
    { label: "PATIENT RECORDS", current: "Excel spreadsheets & scattered files" },
    { label: "APPOINTMENTS", current: "WhatsApp chats & physical diaries" },
    { label: "FINANCES", current: "Paper receipts & disparate pos slips" },
    { label: "IMAGING & X-RAYS", current: "Random desktop folders & USB drives" },
  ];

  return (
    <section
      id="problem"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span
          data-r=""
          className="text-xs font-semibold tracking-widest text-[#D9795B] uppercase block mb-3"
        >
          THE DISCONNECTED CLINIC
        </span>
        <h2
          data-r=""
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6"
        >
          A clinic shouldn&apos;t need five systems to run.
        </h2>
        <p
          data-r=""
          className="text-lg sm:text-xl text-[#5F696B] leading-relaxed"
        >
          When patient histories live in one place, appointments in another, and billing on paper, staff waste hours reconciling information chairside. Dream Dental replaces fragmented tools with a single source of clinical truth.
        </p>
      </div>

      {/* Editorial Workflow Diagram */}
      <div
        data-r=""
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-2xl border border-[#18252B]/10 p-6 sm:p-10 lg:p-12 shadow-sm"
      >
        {/* Fragmented side */}
        <div className="lg:col-span-6 space-y-4">
          <span className="text-[11px] font-semibold tracking-wider text-[#899193] uppercase block mb-4">
            The Fragmented Practice
          </span>
          <div className="space-y-3">
            {fragmentedItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#F6F4EF]/70 border border-[#18252B]/6 transition-all"
              >
                <span className="text-xs font-bold tracking-wider text-[#18252B] uppercase">
                  {item.label}
                </span>
                <span className="text-xs sm:text-sm text-[#899193] font-mono">
                  {item.current}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition indicator */}
        <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
          <div className="w-10 h-10 rounded-full bg-[#ECE9E2] flex items-center justify-center text-[#2F6F6A]">
            <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
          </div>
        </div>

        {/* Unified side */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#2F6F6A]/8 border border-[#2F6F6A]/20">
          <span className="text-[11px] font-semibold tracking-wider text-[#2F6F6A] uppercase block mb-2">
            THE DREAM DENTAL WAY
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#18252B] mb-3">
            Everything connected.
          </h3>
          <p className="text-sm text-[#5F696B] leading-relaxed mb-6">
            From the moment a patient schedules a visit to clinical charting, X-ray evaluation, and treatment payment — every record stays synced in real time.
          </p>

          <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#18252B]">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#2F6F6A] text-white flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>One unified patient profile</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#2F6F6A] text-white flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>Chairside dental charting & imaging</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#2F6F6A] text-white flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>Synchronized billing and operational records</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
