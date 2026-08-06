import Image from "next/image";

const productLinks = [
  { href: "/#modules", label: "Modules" },
  { href: "/#odontogram", label: "Odontogram" },
  { href: "/#business", label: "Payroll" },
  { href: "/#security", label: "Security" },
];

const companyLinks = [
  { href: "/contact", label: "Contact" },
];



function FootLinkGroup({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div data-foot-links="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span style={{ fontSize: "11px", letterSpacing: ".1em", color: "var(--muted-foreground)" }}>
        {heading}
      </span>
      {links.map((link, i) => (
        <a
          key={`${link.href}-${link.label}-${i}`}
          href={link.href}
          className="text-muted-foreground transition-colors duration-200 hover:text-[#E8EDEE]"
          style={{ fontSize: "14px" }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid var(--border)",
        background: "#0A1416",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(36px,5vw,52px) clamp(18px,4vw,40px) 36px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))",
          gap: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <Image
            src="/dreamdental-wordmark-dark.svg"
            alt="dreamdental"
            height={144}
            width={638}
            style={{ height: "24px", width: "auto", display: "block" }}
          />
          <span
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: "var(--muted-foreground)",
              maxWidth: "260px",
            }}
          >
            All-in-one dental clinic management — clinical, business and
            financial in one system.
          </span>
        </div>

        <FootLinkGroup heading="PRODUCT" links={productLinks} />
        <FootLinkGroup heading="COMPANY" links={companyLinks} />

      </div>

      <div
        data-foot-bottom=""
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "20px clamp(18px,4vw,40px) 36px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
          © 2026 Dream Dental. All rights reserved.
        </span>
        <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
          Cairo, Egypt
        </span>
      </div>
    </footer>
  );
}
