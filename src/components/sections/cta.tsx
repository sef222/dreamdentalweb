import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section
      id="demo"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#18252B]/10"
    >
      <div className="rounded-3xl bg-white border border-[#18252B]/12 p-8 sm:p-16 lg:p-24 text-center shadow-[0_24px_60px_rgba(24,37,43,0.06)] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span
            data-r=""
            className="text-xs font-mono font-semibold tracking-[0.2em] text-[#2F6F6A] uppercase block mb-5"
          >
            EXPERIENCE DREAM DENTAL
          </span>

          <h2
            data-r=""
            className="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif tracking-tight text-[#18252B] leading-[1.08] mb-6 text-balance"
          >
            Still running your clinic
            <br />
            <span className="italic text-[#2F6F6A]">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-13 px-9 rounded-xl bg-[#2F6F6A] hover:bg-[#214F4B] text-white text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>Request a Dream Dental Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p
            data-r=""
            className="text-xs text-[#899193] mt-8 font-normal"
          >
            Personalized walkthrough tailored to your practice size, operatories, and clinical workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
