import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileDrawerProps = {
  onClose: () => void;
  rootRef: React.Ref<HTMLDivElement>;
};

const drawerItems = [
  {
    href: "/#modules",
    title: "Modules",
    subtitle: "Seven modules, one patient record",
    number: "01",
  },
  {
    href: "/#odontogram",
    title: "Clinical",
    subtitle: "Odontogram, plans, history",
    number: "02",
  },
  {
    href: "/#business",
    title: "Business",
    subtitle: "Payroll, commissions, staff",
    number: "03",
  },
  {
    href: "/#security",
    title: "Security",
    subtitle: "Roles, permissions, audit trail",
    number: "04",
  },
  {
    href: "/contact",
    title: "Contact",
    subtitle: "Get in touch with us",
    number: "05",
  },
];

export function MobileDrawer({ onClose, rootRef }: MobileDrawerProps) {
  return (
    <div
      ref={rootRef}
      data-drawer=""
      // Hidden with visibility rather than display:none — layout stays
      // computed, so the timeline never animates against zero-sized elements,
      // and the closed drawer is still out of the tab order and the a11y tree.
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
          background: "var(--brand)",
          clipPath: "inset(0 0 0 0)",
          willChange: "clip-path",
        }}
      />
      <div
        data-drawer-bg=""
        style={{
          position: "absolute",
          inset: 0,
          background: "#0A1416",
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
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        data-drawer-deco=""
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-260px",
          width: "620px",
          height: "520px",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 30%, transparent), transparent)",
          filter: "blur(26px)",
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
            "12px clamp(18px,5vw,32px) max(22px,env(safe-area-inset-bottom))",
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
            paddingBottom: "clamp(18px,3vh,28px)",
          }}
        >
          <Image
            src="/dreamdental-wordmark-dark.svg"
            alt="dreamdental"
            height={144}
            width={638}
            style={{ height: "26px", width: "auto", display: "block" }}
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="bg-transparent hover:bg-secondary hover:rotate-90"
            style={{
              width: "44px",
              height: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              color: "var(--foreground)",
              fontSize: "17px",
              lineHeight: 1,
              cursor: "pointer",
              padding: 0,
              transition: "background-color .15s ease, transform .3s ease",
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
            fontSize: "10px",
            letterSpacing: ".18em",
            color: "var(--muted-foreground)",
            paddingBottom: "6px",
          }}
        >
          MENU
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
              className="group pl-0 hover:pl-3"
              style={{
                position: "relative",
                flex: "none",
                display: "block",
                paddingTop: "clamp(15px,2.6vh,24px)",
                paddingBottom: "clamp(15px,2.6vh,24px)",
                paddingRight: 0,
                color: "#E8EDEE",
                transition: "padding-left .35s cubic-bezier(.22,1,.36,1)",
              }}
            >
              {/* Zero-padding mask hugging the line. The clip has to sit here
                  rather than on the <a>, whose vertical padding would let the
                  line show inside the padding band before it arrives. */}
              <span
                data-drawer-mask=""
                style={{ display: "block", overflow: "hidden" }}
              >
                <span
                  data-drawer-line=""
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: "18px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(30px,8.6vw,42px)",
                        lineHeight: 1,
                        letterSpacing: "-.04em",
                        fontWeight: 700,
                        color: "#E8EDEE",
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        lineHeight: 1.3,
                        color: "var(--muted-foreground)",
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
                      gap: "10px",
                      paddingBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        letterSpacing: ".14em",
                        fontVariantNumeric: "tabular-nums",
                        color: "var(--brand)",
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="text-muted-foreground transition-[transform,color] duration-[350ms] group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-[var(--brand)]"
                      style={{
                        fontSize: "15px",
                        transition:
                          "transform .35s cubic-bezier(.22,1,.36,1), color .25s ease",
                      }}
                    >
                      ↗
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
                  background: "var(--border)",
                  transformOrigin: "left center",
                  transition: "background .25s ease",
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
            gap: "11px",
            marginTop: "auto",
            paddingTop: "clamp(20px,4vh,34px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              paddingTop: "6px",
            }}
          >
            <span
              style={{ fontSize: "12px", color: "var(--muted-foreground)" }}
            >
              hello@dreamdental.eg
            </span>
            <span
              style={{
                fontSize: "12px",
                letterSpacing: ".08em",
                color: "var(--muted-foreground)",
              }}
            >
              CAIRO, EGYPT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
