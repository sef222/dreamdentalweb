import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section
      id="demo"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-[#18252B]/8"
    >
      <div className="rounded-3xl bg-white border border-[#18252B]/10 p-8 sm:p-14 lg:p-20 text-center shadow-[0_24px_60px_rgba(24,37,43,0.06)] relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F6F6A]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9795B]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            data-r=""
            className="text-xs font-semibold tracking-widest text-[#2F6F6A] uppercase block mb-4 font-mono"
          >
            EXPERIENCE DREAM DENTAL
          </span>

          <h2
            data-r=""
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18252B] leading-[1.12] mb-6 text-balance"
          >
            Still running your clinic
            <br />
            <span className="font-serif italic font-normal text-[#2F6F6A]">
              across multiple systems?
            </span>
          </h2>

          <p
            data-r=""
            className="text-lg sm:text-xl text-[#5F696B] leading-relaxed max-w-xl mx-auto mb-10 text-balance"
          >
            See what it looks like when everything works together.
          </p>

          <div
            data-r=""
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-13 px-8 rounded-xl bg-[#2F6F6A] hover:bg-[#214F4B] text-white text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>Request a Dream Dental demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p
            data-r=""
            className="text-xs text-[#899193] mt-6"
          >
            No credit card required · Free 30-minute personalized walkthrough for dental practitioners
          </p>
        </div>
      </div>
    </section>
  );
}
