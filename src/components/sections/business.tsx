import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { payroll } from "@/lib/site-data";

const bullets = [
  "Per-dentist or per-treatment commission rules",
  "Attendance and hours tracked against the schedule",
  "Exportable payslips and month-end summaries",
];

// Payroll rows use the source's div/grid markup rather than the shadcn
// <Table> family: the mobile collapse relies on `[data-payroll-row] > span`
// direct-child selectors and a `display:grid` override in globals.css, which
// <tr>/<td> table semantics cannot express.
export function Business() {
  return (
    <section
      id="business"
      style={{
        position: "relative",
        borderTop: "1px solid var(--border)",
        background: "#0C171A",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(60px,8vw,100px) clamp(18px,4vw,40px)",
        }}
      >
        <div
          data-sec-grid=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(400px,100%),1fr))",
            gap: "56px",
            alignItems: "center",
          }}
        >
          <Card data-tile="" className="gap-0 overflow-hidden border border-border py-0 ring-0">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
                borderBottom: "1px solid var(--border)",
                background: "#0A1416",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#E8EDEE" }}>
                Payroll run · August 2026
              </span>
              <Badge className="h-auto rounded-[7px] bg-[var(--brand)] px-3 py-[6px] text-[11px] font-semibold text-white">
                Approve
              </Badge>
            </div>

            <div
              data-payroll-head=""
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(120px,1.6fr) repeat(3,minmax(0,1fr))",
                padding: "12px 22px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: ".06em", color: "var(--muted-foreground)" }}>
                STAFF
              </span>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: ".06em",
                  color: "var(--muted-foreground)",
                  textAlign: "right",
                  overflowWrap: "anywhere",
                }}
              >
                BASE
              </span>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: ".06em",
                  color: "var(--muted-foreground)",
                  textAlign: "right",
                  overflowWrap: "anywhere",
                }}
              >
                COMM.
              </span>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: ".06em",
                  color: "var(--muted-foreground)",
                  textAlign: "right",
                  overflowWrap: "anywhere",
                }}
              >
                TOTAL
              </span>
            </div>

            {payroll.map((p) => (
              <div
                key={p.name}
                data-row=""
                data-payroll-row=""
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(120px,1.6fr) repeat(3,minmax(0,1fr))",
                  padding: "14px 22px",
                  borderBottom: "1px solid var(--border)",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#E8EDEE" }}>
                    {p.name}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
                    {p.role}
                  </span>
                </div>
                <span
                  data-label="Base"
                  style={{
                    fontSize: "12px",
                    color: "var(--muted-foreground)",
                    textAlign: "right",
                    fontVariantNumeric: "tabular-nums",
                    overflowWrap: "anywhere",
                  }}
                >
                  {p.base}
                </span>
                <span
                  data-label="Commission"
                  style={{
                    fontSize: "12px",
                    color: "var(--brand)",
                    textAlign: "right",
                    fontVariantNumeric: "tabular-nums",
                    overflowWrap: "anywhere",
                  }}
                >
                  {p.comm}
                </span>
                <span
                  data-label="Total"
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#E8EDEE",
                    textAlign: "right",
                    fontVariantNumeric: "tabular-nums",
                    overflowWrap: "anywhere",
                  }}
                >
                  {p.total}
                </span>
              </div>
            ))}

            <div
              data-payroll-foot=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
                background: "#0A1416",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                6 staff · 148 treatments · commissions auto-calculated
              </span>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#E8EDEE",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                $62,800
              </span>
            </div>
          </Card>

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
              BUSINESS · PAYROLL
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
                textWrap: "balance",
              }}
            >
              Commissions that calculate themselves.
            </h2>
            <p
              data-r=""
              style={{
                margin: "20px 0 0",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--muted-foreground)",
              }}
            >
              Set a rate per dentist or per treatment type once. Every
              completed procedure feeds attendance, commission and the
              monthly payroll run — so month-end is a review, not a rebuild.
            </p>
            <div
              data-r=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "26px",
              }}
            >
              {bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "14px", color: "var(--brand)" }}>→</span>
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.55,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
