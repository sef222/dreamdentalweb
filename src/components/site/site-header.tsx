import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

const navLinkClassName =
  "h-9 px-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground";

export function SiteHeader({ menuOpen, onToggleMenu }: SiteHeaderProps) {
  return (
    <>
      <div
        data-progress=""
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          // driven by scaleX, not width — a transform composites, a width
          // change relayouts on every scroll frame
          width: "100%",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          willChange: "transform",
          background: "var(--brand)",
          zIndex: 100,
        }}
      />

      <header
        data-header=""
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(16px,2vw,32px)",
          padding: "12px clamp(18px,4vw,40px)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          // background / border / shadow live in globals.css so the scrolled
          // state is a single attribute flip instead of three style writes
          // per scroll frame
        }}
      >
        <a href="/" style={{ display: "block" }}>
          <Image
            src="/dreamdental-wordmark-dark.svg"
            alt="dreamdental"
            height={144}
            width={638}
            style={{ height: "26px", width: "auto", display: "block" }}
            priority
          />
        </a>

        <nav
          data-desktop-nav=""
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,2vw,30px)",
          }}
        >
          <a
            href="/#modules"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              navLinkClassName,
            )}
          >
            Modules
          </a>
          <a
            href="/#odontogram"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              navLinkClassName,
            )}
          >
            Clinical
          </a>
          <a
            href="/#business"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              navLinkClassName,
            )}
          >
            Business
          </a>
          <a
            href="/#security"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              navLinkClassName,
            )}
          >
            Security
          </a>
          <a
            href="/contact"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              navLinkClassName,
            )}
          >
            Contact
          </a>
        </nav>


        <button
          data-burger=""
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
          className="bg-transparent hover:bg-secondary"
          style={{
            width: "40px",
            height: "40px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5px",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            cursor: "pointer",
            padding: 0,
            transition: "background-color .15s ease",
          }}
        >
          <span
            data-burger-top=""
            style={{
              display: "block",
              width: "18px",
              height: "1.5px",
              background: "#E8EDEE",
              borderRadius: "2px",
              transition: "transform .28s ease",
              transform: menuOpen ? "translateY(3.25px) rotate(45deg)" : "none",
            }}
          />
          <span
            data-burger-bot=""
            style={{
              display: "block",
              width: "18px",
              height: "1.5px",
              background: "#E8EDEE",
              borderRadius: "2px",
              transition: "transform .28s ease",
              transform: menuOpen
                ? "translateY(-3.25px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </header>
    </>
  );
}
