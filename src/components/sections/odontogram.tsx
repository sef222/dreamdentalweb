import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { upperTeeth, lowerTeeth } from "@/lib/site-data";

const legend = [
  { label: "Healthy", swatch: "var(--secondary)", border: "rgba(255,255,255,.2)" },
  { label: "Decay", swatch: "#F43F5E", border: "#F43F5E" },
  { label: "Treated", swatch: "var(--brand)", border: "var(--brand)" },
  { label: "Crown", swatch: "#F49E0C", border: "#F49E0C" },
];

const footCells = [
  { label: "SELECTED · 14", value: "Distal decay" },
  { label: "PLANNED", value: "Composite filling" },
  { label: "ESTIMATE", value: "$320", numeric: true },
];

export function Odontogram() {
  return (
    <section
      id="odontogram"
      style={{
        position: "relative",
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
            CLINICAL · ODONTOGRAM
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
            A chart your dentists will actually keep up to date.
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
            Click a tooth, log the finding, and the treatment plan, the
            invoice and the patient history update with it. FDI or Universal
            numbering, surfaces per tooth, and a full audit trail of who
            changed what.
          </p>
          <div
            data-r=""
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "26px",
            }}
          >
            {legend.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "3px",
                    background: item.swatch,
                    border: `1px solid ${item.border}`,
                  }}
                />
                <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#E8EDEE" }}>
                Layla A. · 34
              </span>
              <Badge
                variant="outline"
                className="h-auto rounded-md border-border px-2 py-[3px] text-[10.5px] font-normal text-muted-foreground"
              >
                #PT-2048
              </Badge>
            </div>
            <span
              style={{
                fontSize: "10.5px",
                letterSpacing: ".1em",
                color: "var(--brand)",
              }}
            >
              FDI NUMBERING
            </span>
          </div>

          <div
            data-scroll-x=""
            style={{
              padding: "26px 22px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              data-teeth=""
              style={{ display: "flex", gap: "min(5px,.6vw)", minWidth: "480px" }}
            >
              {upperTeeth.map((t) => (
                <div
                  key={t.n}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "46px",
                      borderRadius: "var(--radius-md) 8px 5px 5px",
                      background: t.bg,
                      border: `1px solid ${t.bd}`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {t.n}
                  </span>
                </div>
              ))}
            </div>
            <div
              data-teeth=""
              style={{ display: "flex", gap: "min(5px,.6vw)", minWidth: "480px" }}
            >
              {lowerTeeth.map((t) => (
                <div
                  key={t.n}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "46px",
                      borderRadius: "5px 5px 8px 8px",
                      background: t.bg,
                      border: `1px solid ${t.bd}`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {t.n}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(150px,100%),1fr))",
              borderTop: "1px solid var(--border)",
            }}
          >
            {footCells.map((cell, i) => (
              <div
                key={cell.label}
                style={{
                  padding: "16px 22px",
                  borderRight:
                    i < footCells.length - 1 ? "1px solid var(--border)" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: ".09em",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {cell.label}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#E8EDEE",
                    fontVariantNumeric: cell.numeric ? "tabular-nums" : undefined,
                  }}
                >
                  {cell.value}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
