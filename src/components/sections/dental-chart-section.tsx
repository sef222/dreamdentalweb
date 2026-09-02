import Image from "next/image";

export function DentalChartSection() {
  const highlights = [
    {
      title: "Interactive Odontogram",
      description:
        "Switch effortlessly between adult 32-tooth and primary 20-tooth charts with full Universal numbering support.",
    },
    {
      title: "Surface-Level Condition Mapping",
      description:
        "Color-coded clinical mapping for mesial, occlusal, distal, buccal, and lingual surfaces, plus endodontics and implants.",
    },
    {
      title: "Immediate Treatment Plan Sync",
      description:
        "Every diagnosed tooth condition directly populates the patient's multi-stage treatment plan and chairside procedure fee quote.",
    },
  ];

  return (
    <section
      id="chairside"
      className="relative py-32 sm:py-40 lg:py-48 px-4 sm:px-8 lg:px-12 bg-[#214F4B] text-[#F6F4EF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div
            data-r=""
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold tracking-widest text-[#DCEBE7] uppercase mb-6"
          >
            <span>SIGNATURE CLINICAL MODULE</span>
            <span className="text-white/40">·</span>
            <span>CHAIRSIDE DENTAL CHARTING</span>
          </div>

          <h2
            data-r=""
            className="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif tracking-tight text-white leading-[1.06] mb-6 sm:mb-8 text-balance"
          >
            Built for the work
            <br />
            <span className="italic text-[#DCEBE7]">
              that happens chairside.
            </span>
          </h2>

          <p
            data-r=""
            className="text-lg sm:text-xl text-[#DCEBE7]/90 leading-relaxed font-light text-balance"
          >
            Dentistry is an anatomical specialty. Dream Dental provides an ultra-fast, interactive dental chart designed for the dentist sitting chairside with gloves on—fast tooth selection, intuitive condition mapping, and instant treatment translation.
          </p>
        </div>

        {/* Extremely Prominent Real Dental Chart Screenshot */}
        <div
          data-r=""
          className="relative w-full mb-16 sm:mb-20"
        >
          <div className="screenshot-frame-dark p-2.5 sm:p-4 bg-[#142321]/90 border border-white/15 shadow-[0_36px_90px_rgba(0,0,0,0.5)]">
            <div className="relative rounded-[14px] overflow-hidden bg-[#18252B] border border-white/10">
              <Image
                src="/screenshots/Dental chart.png"
                alt="Dream Dental interactive dental charting odontogram showing adult teeth map, surface condition markers, and planned procedures"
                width={2560}
                height={1440}
                quality={95}
                className="w-full h-auto object-cover rounded-[14px] block"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#DCEBE7]/70 mt-4 px-2">
            <span>Anatomical Odontogram · Surface-Level Charting & Clinical Diagnostics</span>
            <span className="font-mono text-[11px] text-[#DCEBE7]/50">Universal Numbering System</span>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div
          data-r=""
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-12 border-t border-white/15"
        >
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#DCEBE7] block mb-2">
                0{idx + 1} — {item.title}
              </span>
              <p className="text-sm text-white/85 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
