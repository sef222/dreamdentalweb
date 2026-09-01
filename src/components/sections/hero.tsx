import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      data-hero=""
      className="relative pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 lg:pb-36 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div
          data-r=""
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECE9E2] border border-[#18252B]/10 text-xs font-semibold tracking-wider text-[#2F6F6A] uppercase mb-6 sm:mb-8"
        >
          <span>DREAM DENTAL</span>
          <span className="text-[#899193]">·</span>
          <span className="text-[#5F696B]">CLINIC MANAGEMENT SOFTWARE</span>
        </div>

        {/* Main Headline */}
        <h1
          data-r=""
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#18252B] leading-[1.08] text-balance mb-6"
        >
          Everything your clinic does.
          <br />
          <span className="font-serif italic font-normal text-[#2F6F6A]">
            One place
          </span>{" "}
          to run it.
        </h1>

        {/* Description */}
        <p
          data-r=""
          className="text-lg sm:text-xl text-[#5F696B] leading-relaxed max-w-2xl text-balance mb-8 sm:mb-10 font-normal"
        >
          Dream Dental brings patients, appointments, treatments, imaging and
          finances into one connected workspace.
        </p>

        {/* CTAs */}
        <div
          data-r=""
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-16 sm:mb-20"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2F6F6A] hover:bg-[#214F4B] text-white text-base font-semibold transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Request a demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#problem"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white hover:bg-[#ECE9E2] border border-[#18252B]/12 text-[#18252B] text-base font-medium transition-colors"
          >
            <span>Explore the system</span>
            <ChevronDown className="w-4 h-4 text-[#5F696B]" />
          </a>
        </div>
      </div>

      {/* Hero Visual — Real 4K Dashboard screenshot */}
      <div
        data-r=""
        className="relative mx-auto max-w-6xl"
      >
        <div className="screenshot-frame bg-white p-2 sm:p-3">
          <div className="relative w-full rounded-xl overflow-hidden bg-[#F6F4EF] border border-[#18252B]/8">
            <Image
              src="/screenshots/Dashboard.png"
              alt="Dream Dental clinical operations dashboard showing patient queue, day appointments, treatment summary, and financial ledger"
              width={2560}
              height={1440}
              quality={95}
              priority
              className="w-full h-auto object-cover rounded-xl block"
            />
          </div>
        </div>
        
        {/* Subtle caption */}
        <div className="flex items-center justify-between text-xs text-[#899193] mt-3 px-2">
          <span>Dream Dental Clinical Dashboard · Live Overview</span>
          <span className="hidden sm:inline font-mono">v2.4 Production Suite</span>
        </div>
      </div>
    </section>
  );
}
