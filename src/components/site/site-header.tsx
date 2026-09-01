import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SiteHeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onRequestDemo?: () => void;
};

export function SiteHeader({ menuOpen, onToggleMenu, onRequestDemo }: SiteHeaderProps) {
  return (
    <>
      {/* Subtle top progress indicator */}
      <div
        data-progress=""
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: "100%",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          willChange: "transform",
          background: "#2F6F6A",
          zIndex: 100,
        }}
      />

      <header
        data-header=""
        className="sticky top-0 z-40 flex items-center justify-between h-[72px] px-4 sm:px-8 lg:px-12 bg-[#F6F4EF]/85 backdrop-blur-md border-b border-[#18252B]/8 transition-all duration-300"
      >
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2 select-none group">
          <Image
            src="/dreamdental-wordmark.svg"
            alt="dreamdental"
            height={144}
            width={638}
            className="h-[24px] sm:h-[26px] w-auto block transition-opacity group-hover:opacity-85"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          data-desktop-nav=""
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          <a
            href="/#workflow"
            className="px-3.5 py-2 text-sm font-medium text-[#5F696B] hover:text-[#18252B] hover:bg-[#ECE9E2]/60 rounded-lg transition-colors"
          >
            Product
          </a>
          <a
            href="/#chairside"
            className="px-3.5 py-2 text-sm font-medium text-[#5F696B] hover:text-[#18252B] hover:bg-[#ECE9E2]/60 rounded-lg transition-colors"
          >
            For Clinics
          </a>
          <a
            href="/#security"
            className="px-3.5 py-2 text-sm font-medium text-[#5F696B] hover:text-[#18252B] hover:bg-[#ECE9E2]/60 rounded-lg transition-colors"
          >
            Security
          </a>
          <a
            href="/#system"
            className="px-3.5 py-2 text-sm font-medium text-[#5F696B] hover:text-[#18252B] hover:bg-[#ECE9E2]/60 rounded-lg transition-colors"
          >
            About
          </a>
          <Link
            href="/contact"
            className="px-3.5 py-2 text-sm font-medium text-[#5F696B] hover:text-[#18252B] hover:bg-[#ECE9E2]/60 rounded-lg transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Burger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-[#2F6F6A] hover:bg-[#214F4B] text-white text-sm font-medium transition-colors shadow-sm"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            data-burger=""
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
            className="flex md:hidden w-10 h-10 items-center justify-center rounded-lg border border-[#18252B]/12 bg-white/60 hover:bg-[#ECE9E2] text-[#18252B] transition-colors"
          >
            <div className="flex flex-col gap-1.5 items-center justify-center w-5">
              <span
                className={`block h-0.5 w-4 bg-[#18252B] rounded-full transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[#18252B] rounded-full transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[#18252B] rounded-full transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>
    </>
  );
}
