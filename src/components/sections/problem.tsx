import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProblemSection() {
  const fragmentedPoints = [
    {
      label: "PATIENT RECORDS",
      reality: "Stored in isolated folders, requiring manual paperwork for every visit.",
    },
    {
      label: "APPOINTMENTS",
      reality: "Scheduled via messaging apps or paper diaries without clinical context.",
    },
    {
      label: "DENTAL IMAGING",
      reality: "Saved in external software, requiring chairside window switching during treatment.",
    },
    {
      label: "FINANCES & BILLING",
      reality: "Reconciled manually through spreadsheets and standalone card machines.",
    },
    {
      label: "LAB ORDERS & SUPPLIES",
      reality: "Tracked on whiteboards, risking forgotten fabrication deadlines.",
    },
  ];

  const unifiedPoints = [
    "A single source of truth for every patient profile, note, and medical alert",
    "Live chairside dental charting directly linked to procedures and fee schedules",
    "High-resolution radiograph viewing inside the clinical charting workflow",
    "Automated invoicing, split payments, and clinician revenue tracking",
  ];

  return (
    <section
      id="problem"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      {/* Editorial Lead */}
      <div className="max-w-3xl mb-16 sm:mb-24">
        <span
          data-r=""
          className="text-xs font-semibold tracking-[0.2em] text-[#D9795B] uppercase block mb-4 font-mono"
        >
          THE DISCONNECTED CLINIC
        </span>
        <h2
          data-r=""
          className="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 sm:mb-8 text-balance"
        >
          A clinic shouldn&apos;t need{" "}
          <span className="italic text-[#2F6F6A]">five systems</span> to run.
        </h2>
        <p
          data-r=""
          className="text-lg sm:text-xl text-[#5F696B] leading-relaxed max-w-2xl text-balance"
        >
          When patient histories live in one place, appointments in another, and billing in spreadsheets, chairside time is lost to reconciliation. Dream Dental unifies the entire practice under one calm, coherent architecture.
        </p>
      </div>

      {/* Typographic Split: Fragmentation vs. Connection */}
      <div
        data-r=""
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch"
      >
        {/* Left: The Disconnected Reality */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#18252B]/12 p-6 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(24,37,43,0.06)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#18252B]/8">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#899193] uppercase">
                Fragmented Workflows
              </span>
              <span className="text-xs text-[#D9795B] font-medium font-mono">
                Manual Friction
              </span>
            </div>

            <div className="space-y-5">
              {fragmentedPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 pb-4 border-b border-[#18252B]/6 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-mono font-bold tracking-wider text-[#18252B] uppercase shrink-0 sm:w-44">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#5F696B] leading-relaxed">
                    {item.reality}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#18252B]/8 text-xs text-[#899193] flex items-center justify-between">
            <span>Result: Lost clinical hours & fragmented patient care</span>
            <span className="font-mono">5+ disconnected tools</span>
          </div>
        </div>

        {/* Right: The Solution — Dream Dental Connects Them */}
        <div className="lg:col-span-5 bg-[#2F6F6A] text-white rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-[0_24px_60px_rgba(33,79,75,0.2)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono tracking-widest uppercase mb-8 text-[#DCEBE7]">
              <span>THE RESOLUTION</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif leading-[1.1] mb-6 text-balance">
              Dream Dental connects them.
            </h3>

            <p className="text-sm sm:text-base text-[#DCEBE7]/90 leading-relaxed mb-8">
              From the moment a patient checks in to anatomical dental charting, diagnostic radiograph review, and final invoice settlement — every record is updated continuously in real time.
            </p>

            <ul className="space-y-4">
              {unifiedPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#DCEBE7] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex items-center justify-between">
            <span className="text-xs text-[#DCEBE7]/80 font-mono uppercase tracking-wider">
              One Unified Workspace
            </span>
            <a
              href="#workflow"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#DCEBE7] transition-colors"
            >
              <span>See the workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
