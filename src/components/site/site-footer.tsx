import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { href: "/#workflow", label: "Patient Workflow" },
  { href: "/#appointments", label: "Appointments & Scheduling" },
  { href: "/#chairside", label: "Dental Chart" },
  { href: "/#imaging", label: "Clinical Imaging" },
  { href: "/#operations", label: "Lab Orders & Operations" },
  { href: "/#financial", label: "Financial Management" },
];

const platformLinks = [
  { href: "/#system", label: "Complete Architecture" },
  { href: "/#security", label: "Security & Governance" },
  { href: "/#problem", label: "The Connected Clinic" },
];

const companyLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/contact", label: "Request a Demo" },
];

function FootLinkGroup({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold tracking-wider text-[#2F6F6A] uppercase font-mono">
        {heading}
      </span>
      <div className="flex flex-col gap-2.5">
        {links.map((link, i) => (
          <a
            key={`${link.href}-${link.label}-${i}`}
            href={link.href}
            className="text-sm text-[#5F696B] hover:text-[#18252B] transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[#18252B]/10 bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/dreamdental-wordmark.svg"
                alt="dreamdental"
                height={144}
                width={638}
                className="h-[24px] w-auto block"
              />
            </Link>
            <p className="text-sm text-[#5F696B] leading-relaxed max-w-sm">
              All-in-one dental clinic management software bringing patient profiles, operatory schedules, chairside charting, radiographic imaging, and business financials into one workspace.
            </p>
          </div>

          <FootLinkGroup heading="CLINICAL MODULES" links={productLinks} />
          <FootLinkGroup heading="ARCHITECTURE" links={platformLinks} />
          <FootLinkGroup heading="COMPANY" links={companyLinks} />
        </div>

        <div className="mt-16 pt-8 border-t border-[#18252B]/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#899193]">
          <span>© 2026 Dream Dental. All rights reserved.</span>
          <span>Purpose-built dental healthcare technology</span>
        </div>
      </div>
    </footer>
  );
}

