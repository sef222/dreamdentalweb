import Image from "next/image";
import Link from "next/link";

type MobileDrawerProps = {
  onClose: () => void;
  onRequestDemo?: () => void;
  rootRef: React.Ref<HTMLDivElement>;
};

const drawerItems = [
  {
    href: "/#workflow",
    title: "Patient Workflow",
    subtitle: "Complete clinical history in one profile",
    number: "01",
  },
  {
    href: "/#chairside",
    title: "Dental Chart",
    subtitle: "Purpose-built for chairside dentistry",
    number: "02",
  },
  {
    href: "/#imaging",
    title: "Clinical Imaging",
    subtitle: "X-rays and diagnostics connected",
    number: "03",
  },
  {
    href: "/#operations",
    title: "Operations & Lab",
    subtitle: "Lab orders, procedures and inventory",
    number: "04",
  },
  {
    href: "/#financial",
    title: "Financials",
    subtitle: "Invoices, payments and revenue",
    number: "05",
  },
  {
    href: "/#system",
    title: "Complete System",
    subtitle: "Architectural overview across departments",
    number: "06",
  },
  {
    href: "/#security",
    title: "Security",
    subtitle: "Calm, structured, compliant clinic data",
    number: "07",
  },
  {
    href: "/contact",
    title: "Contact",
    subtitle: "Get in touch with our clinic team",
    number: "08",
  },
];

export function MobileDrawer({ onClose, onRequestDemo, rootRef }: MobileDrawerProps) {
  return (
    <div
      ref={rootRef}
      data-drawer=""
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        visibility: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        data-drawer-accent=""
        style={{
          position: "absolute",
          inset: 0,
          background: "#2F6F6A",
          clipPath: "inset(0 0 0 0)",
          willChange: "clip-path",
        }}
      />
      <div
        data-drawer-bg=""
        style={{
          position: "absolute",
          inset: 0,
          background: "#F6F4EF",
          clipPath: "inset(0 0 0 0)",
          willChange: "clip-path",
        }}
      />
      <div
        data-drawer-deco=""
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 80% 90%, rgba(47,111,106,0.08), transparent 60%)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
          maxHeight: "100dvh",
          minHeight: 0,
          padding:
            "16px clamp(18px,5vw,32px) max(24px,env(safe-area-inset-bottom))",
          boxSizing: "border-box",
        }}
      >
        <div
          data-drawer-top=""
          style={{
            flex: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            paddingBottom: "16px",
            borderBottom: "1px solid rgba(24, 37, 43, 0.08)",
          }}
        >
          <Image
            src="/dreamdental-wordmark.svg"
            alt="dreamdental"
            height={144}
            width={638}
            style={{ height: "24px", width: "auto", display: "block" }}
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            style={{
              width: "40px",
              height: "40px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(24, 37, 43, 0.12)",
              borderRadius: "8px",
              color: "#18252B",
              background: "#FFFFFF",
              fontSize: "16px",
              lineHeight: 1,
              cursor: "pointer",
              padding: 0,
            }}
          >
            ✕
          </button>
        </div>

        <span
          data-drawer-eyebrow=""
          style={{
            flex: "none",
            display: "block",
            fontSize: "11px",
            letterSpacing: ".12em",
            fontWeight: 600,
            color: "#2F6F6A",
            paddingTop: "14px",
            paddingBottom: "8px",
            textTransform: "uppercase",
          }}
        >
          Clinic Operating System
        </span>

        <nav
          style={{
            flex: "1 1 auto",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {drawerItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              data-drawer-item=""
              className="group pl-0 hover:pl-2 transition-all duration-200"
              style={{
                position: "relative",
                flex: "none",
                display: "block",
                paddingTop: "14px",
                paddingBottom: "14px",
                color: "#18252B",
              }}
            >
              <span
                data-drawer-mask=""
                style={{ display: "block", overflow: "hidden" }}
              >
                <span
                  data-drawer-line=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(20px,5vw,26px)",
                        lineHeight: 1.15,
                        fontWeight: 600,
                        color: "#18252B",
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        lineHeight: 1.3,
                        color: "#5F696B",
                      }}
                    >
                      {item.subtitle}
                    </span>
                  </span>
                  <span
                    style={{
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        letterSpacing: ".1em",
                        fontVariantNumeric: "tabular-nums",
                        color: "#2F6F6A",
                        fontWeight: 600,
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="text-[#899193] group-hover:text-[#2F6F6A] transition-colors"
                      style={{ fontSize: "14px" }}
                    >
                      →
                    </span>
                  </span>
                </span>
              </span>
              <span
                data-drawer-rule=""
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "1px",
                  background: "rgba(24, 37, 43, 0.08)",
                  transformOrigin: "left center",
                }}
              />
            </a>
          ))}
        </nav>

        <div
          data-drawer-foot=""
          style={{
            flex: "none",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "auto",
            paddingTop: "16px",
            borderTop: "1px solid rgba(24, 37, 43, 0.08)",
          }}
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full py-3 rounded-lg bg-[#2F6F6A] text-white text-sm font-semibold text-center hover:bg-[#214F4B] transition-colors block"
          >
            Request a Live Demo →
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#5F696B" }}>
              hello@dreamdental.eg
            </span>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: ".08em",
                color: "#899193",
                textTransform: "uppercase",
              }}
            >
              Healthcare Technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
