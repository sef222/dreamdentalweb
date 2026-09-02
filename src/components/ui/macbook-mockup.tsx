import Image from "next/image";

interface MacbookMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function MacbookMockup({
  src,
  alt,
  priority = false,
  className = "",
}: MacbookMockupProps) {
  return (
    <div className={`relative mx-auto w-full select-none ${className}`}>
      {/* 
        MacBook Pro Device Assembly
        Lid + Screen Bezel + Screen Display (16:9) + Lower Chassis + Ground Shadows 
        The 3840x2160 screenshot is displayed in full at native 16:9 aspect ratio with zero cutoff.
      */}
      <div className="relative mx-auto w-full max-w-[1280px]">
        {/* === TOP LID (ALUMINUM DISPLAY HOUSING) === */}
        <div className="relative mx-auto w-full rounded-t-[18px] sm:rounded-t-[26px] md:rounded-t-[32px] bg-gradient-to-b from-[#3d4044] via-[#26282b] to-[#1a1b1d] p-[3px] sm:p-[4px] md:p-[6px] shadow-[0_2px_6px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.22)]">
          {/* Inner Display Bezel (Matte Black Glass Frame) */}
          <div className="relative w-full rounded-t-[15px] sm:rounded-t-[22px] md:rounded-t-[26px] bg-[#0c0d0e] px-[6px] sm:px-[10px] md:px-[14px] pt-[8px] sm:pt-[12px] md:pt-[16px] pb-[8px] sm:pb-[12px] md:pb-[16px] overflow-hidden">
            {/* Top Bezel Center Camera Lens & Sensor Dot (Located above the screen, NEVER obscuring the UI) */}
            <div className="flex items-center justify-center gap-2 mb-[6px] sm:mb-[9px] md:mb-[12px]">
              {/* Camera Lens */}
              <div className="w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rounded-full bg-[#111923] border border-[#243347]/70 relative flex items-center justify-center">
                <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-[#3b82f6]/50 blur-[0.3px]" />
              </div>
              {/* Ambient Sensor */}
              <div className="w-1 sm:w-1.2 h-1 sm:h-1.2 rounded-full bg-[#181a1d]" />
            </div>

            {/* Screen Glass Area with Exact 16:9 Aspect Ratio (3840 x 2160 native resolution) */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[4px] sm:rounded-[6px] md:rounded-[8px] bg-[#18252B] shadow-inner">
              {/* Actual Dream Dental Screenshot - 100% Unclipped */}
              <Image
                src={src}
                alt={alt}
                width={3840}
                height={2160}
                quality={95}
                priority={priority}
                className="w-full h-full object-contain block"
              />

              {/* Subtle Screen Glass Sheen / Reflection Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen"
                style={{
                  background:
                    "linear-gradient(125deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.01) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* === LOWER CHASSIS & HINGE === */}
        <div className="relative mx-auto w-[104%] -left-[2%]">
          {/* Main Aluminum Base Deck */}
          <div className="relative h-[12px] sm:h-[16px] md:h-[20px] rounded-b-[12px] sm:rounded-b-[18px] md:rounded-b-[22px] bg-gradient-to-b from-[#2c2f32] via-[#202224] to-[#161719] border-t border-[#46494c] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_14px_rgba(0,0,0,0.38)]">
            {/* Center Thumb Groove for Opening */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-32 h-[3px] sm:h-[4px] md:h-[5px] bg-[#0c0d0e] rounded-b-[4px] sm:rounded-b-[6px] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.08)]" />

            {/* Subtle Front Lip Specular Edge */}
            <div className="absolute inset-x-6 bottom-0 h-[1px] bg-white/10" />
          </div>

          {/* Precision Feet Contact Shadow */}
          <div className="flex justify-between px-12 sm:px-20 md:px-28">
            <div className="w-14 sm:w-24 h-1 bg-black/45 rounded-full blur-[2px]" />
            <div className="w-14 sm:w-24 h-1 bg-black/45 rounded-full blur-[2px]" />
          </div>
        </div>

        {/* === REALISTIC AMBIENT GROUND DROP SHADOWS === */}
        {/* Layer 1: Tight Base Contact Shadow */}
        <div className="absolute -bottom-2 sm:-bottom-3 inset-x-8 sm:inset-x-14 h-4 sm:h-6 bg-[#18252B]/40 blur-md rounded-full pointer-events-none -z-10" />

        {/* Layer 2: Medium Soft Ambient Shadow */}
        <div className="absolute -bottom-6 sm:-bottom-10 inset-x-12 sm:inset-x-20 h-12 sm:h-20 bg-[#18252B]/20 blur-xl rounded-full pointer-events-none -z-20" />

        {/* Layer 3: Wide Diffuse Ground Shadow */}
        <div className="absolute -bottom-12 sm:-bottom-20 inset-x-4 sm:inset-x-10 h-24 sm:h-36 bg-[#18252B]/12 blur-3xl rounded-full pointer-events-none -z-30" />
      </div>
    </div>
  );
}
