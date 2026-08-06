import { Card } from "@/components/ui/card";

// Source lines 487-517: the analytics "quad" stat grid ("The Monday-morning
// numbers."). Named proof.tsx per the file manifest's instruction to name
// this component after what it actually is — it is not the testimonial
// (see quote.tsx for the blockquote at source lines 535-544).
const tileClassName =
  "gap-[10px] border border-border py-6 ring-0 transition-colors duration-[250ms] hover:border-[color-mix(in_oklab,var(--ring)_45%,var(--border))] hover:bg-muted";

export function Proof() {
  return (
    <section
      style={{
        position: "relative",
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "clamp(60px,8vw,100px) clamp(18px,4vw,40px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "28px",
        }}
      >
        <div>
          <span
            data-r=""
            style={{
              display: "block",
              fontSize: "11px",
              letterSpacing: ".16em",
              color: "var(--brand)",
              marginBottom: "14px",
            }}
          >
            ANALYTICS
          </span>
          <h2
            data-r=""
            style={{
              margin: 0,
              fontSize: "clamp(30px,3.1vw,40px)",
              lineHeight: 1.08,
              letterSpacing: "-.035em",
              fontWeight: 700,
              color: "#E8EDEE",
            }}
          >
            The Monday-morning numbers.
          </h2>
        </div>
        <p
          data-r=""
          style={{
            margin: 0,
            maxWidth: "400px",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "var(--muted-foreground)",
          }}
        >
          Revenue, chair utilisation, no-shows and outstanding balances —
          refreshed live.
        </p>
      </div>

      <div
        data-quad=""
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))",
          gap: "16px",
        }}
      >
        <Card data-tile="" className={tileClassName}>
          <div className="flex flex-col gap-[10px] px-6">
            <span
              style={{ fontSize: "10px", letterSpacing: ".09em", color: "var(--muted-foreground)" }}
            >
              REVENUE · MTD
            </span>
            <span
              style={{
                fontSize: "clamp(26px,2.6vw,34px)",
                fontWeight: 700,
                letterSpacing: "-.04em",
                color: "#E8EDEE",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              $184k
            </span>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--brand)" }}>
              +8.1% vs last month
            </span>
          </div>
        </Card>

        <Card data-tile="" className={tileClassName}>
          <div className="flex flex-col gap-[10px] px-6">
            <span
              style={{ fontSize: "10px", letterSpacing: ".09em", color: "var(--muted-foreground)" }}
            >
              CHAIR UTILISATION
            </span>
            <span
              style={{
                fontSize: "clamp(26px,2.6vw,34px)",
                fontWeight: 700,
                letterSpacing: "-.04em",
                color: "#E8EDEE",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              87%
            </span>
            <div
              style={{
                height: "5px",
                borderRadius: "999px",
                background: "var(--border)",
                overflow: "hidden",
              }}
            >
              <div
                data-bar2=""
                style={{
                  width: "87%",
                  height: "100%",
                  background: "var(--brand)",
                  borderRadius: "999px",
                }}
              />
            </div>
          </div>
        </Card>

        <Card data-tile="" className={tileClassName}>
          <div className="flex flex-col gap-[10px] px-6">
            <span
              style={{ fontSize: "10px", letterSpacing: ".09em", color: "var(--muted-foreground)" }}
            >
              NO-SHOW RATE
            </span>
            <span
              style={{
                fontSize: "clamp(26px,2.6vw,34px)",
                fontWeight: 700,
                letterSpacing: "-.04em",
                color: "#E8EDEE",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              3.4%
            </span>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)" }}>
              −1.2 pts since reminders
            </span>
          </div>
        </Card>

        <Card data-tile="" className={tileClassName}>
          <div className="flex flex-col gap-[10px] px-6">
            <span
              style={{ fontSize: "10px", letterSpacing: ".09em", color: "var(--muted-foreground)" }}
            >
              OUTSTANDING
            </span>
            <span
              style={{
                fontSize: "clamp(26px,2.6vw,34px)",
                fontWeight: 700,
                letterSpacing: "-.04em",
                color: "#E8EDEE",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              $21k
            </span>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#F49E0C" }}>
              14 invoices overdue
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
}
