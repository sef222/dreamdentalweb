import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { MacbookMockup } from "@/components/ui/macbook-mockup";

export function Hero() {
  return (
    <section
      id="top"
      data-hero=""
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-32 lg:pb-40 px-4 sm:px-6 lg:px-8"
    >
      {/* 
        Editorial Header
        Restrained, calm, confident.
        DREAM DENTAL -> The clinic, connected. -> [ Explore Dream Dental ]
      */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        {/* Brand Tagline */}
        <span
          data-r=""
          className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#2F6F6A] uppercase mb-4 sm:mb-5 font-mono"
        >
          DREAM DENTAL
        </span>

        {/* Hero Title */}
        <h1
          data-r=""
          className="text-5xl sm:text-7xl lg:text-8xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.04] mb-6 sm:mb-8 text-balance"
        >
          The clinic,{" "}
          <span className="italic text-[#2F6F6A]">connected.</span>
        </h1>

        {/* Supporting Line */}
        <p
          data-r=""
          className="text-base sm:text-lg lg:text-xl text-[#5F696B] leading-relaxed max-w-xl text-balance mb-8 sm:mb-10 font-normal"
        >
          A unified clinical operating system bringing patient history, chairside charting, radiographic imaging, and practice financials into one workspace.
        </p>

        {/* Action Controls */}
        <div
          data-r=""
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <a
            href="#problem"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-[#2F6F6A] hover:bg-[#214F4B] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Explore Dream Dental</span>
            <ArrowDown className="w-4 h-4 opacity-80" />
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white hover:bg-[#ECE9E2] border border-[#18252B]/12 text-[#18252B] text-sm font-medium transition-colors"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#5F696B]" />
          </Link>
        </div>
      </div>

      {/* 
        DOMINANT HERO VISUAL: THE REAL DREAM DENTAL PRODUCT
        Commands the viewport inside a precision MacBook Pro frame.
        No floating fake cards, no decorative blobs. Pure product.
      */}
      <div
        data-r=""
        className="relative mx-auto max-w-[1320px] px-2 sm:px-4"
      >
        <MacbookMockup
          src="/screenshots/Dashboard.png"
          alt="Dream Dental operational clinical dashboard showing real-time multi-chair queue, patient appointments, and revenue ledger"
          priority
        />

        {/* Quiet Authentic Product Legend */}
        <div className="flex items-center justify-between text-xs text-[#899193] mt-8 sm:mt-10 px-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F6A]" />
            <span>Dream Dental Clinical Dashboard · Live Multi-Operatory Environment</span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-[#5F696B]">
            Production EHR & Practice OS
          </span>
        </div>
      </div>
    </section>
  );
}
