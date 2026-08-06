import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { upperTeeth } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="top"
      data-hero=""
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-140px",
          top: "-240px",
          width: "680px",
          height: "680px",
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 20%, transparent), transparent)",
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(430px,100%),1fr))",
          gap: "48px",
          maxWidth: "1360px",
          margin: "0 auto",
          padding:
            "clamp(40px,6vw,76px) clamp(18px,4vw,40px) clamp(48px,7vw,84px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "center",
          }}
        >
          <span
            data-r=""
            style={{
              fontSize: "11px",
              letterSpacing: ".16em",
              color: "var(--brand)",
              marginBottom: "24px",
            }}
          >
            THE CLINIC OPERATING SYSTEM
          </span>
          <h1
            data-r=""
            style={{
              margin: 0,
              fontSize: "clamp(40px,5vw,66px)",
              lineHeight: 1.02,
              letterSpacing: "-.04em",
              fontWeight: 800,
              color: "#E8EDEE",
              textWrap: "balance",
            }}
          >
            Chairs, charts and cash
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "-.015em",
                color: "var(--brand)",
              }}
            >
              handled.
            </span>
          </h1>
          <p
            data-r=""
            style={{
              margin: "24px 0 0",
              fontSize: "16.5px",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
              textWrap: "pretty",
            }}
          >
            Dream Dental keeps the front desk, the surgery and the back office
            on the same page — appointments, odontogram, treatment plans,
            billing, payroll and inventory in one place. No spreadsheets, no
            double entry.
          </p>


        </div>

        <div
          data-hero-bento=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(min(140px,100%),1fr))",
            gap: "14px",
            minWidth: 0,
          }}
        >
          <div
            data-tile=""
            style={{
              gridColumn: "1/-1",
              background: "#101B1F",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "18px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: "14px",
              }}
            >
              <span
                style={{ fontSize: "14px", fontWeight: 700, color: "#E8EDEE" }}
              >
                Odontogram · Layla A.
              </span>
              <span
                style={{
                  fontSize: "10px",
                  color: "var(--brand)",
                  border:
                    "1px solid color-mix(in oklab, var(--brand) 45%, transparent)",
                  padding: "4px 8px",
                  borderRadius: "6px",
                }}
              >
                FDI
              </span>
            </div>
            <div
              data-hero-teeth=""
              data-teeth=""
              style={{ display: "flex", gap: "min(4px,.5vw)", minWidth: 0 }}
            >
              {upperTeeth.map((t) => (
                <div
                  key={t.n}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "32px",
                      borderRadius: "6px 6px 4px 4px",
                      background: t.bg,
                      border: `1px solid ${t.bd}`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "9px",
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
            data-tile=""
            style={{
              background: "#101B1F",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "16px 16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: ".09em",
                color: "var(--muted-foreground)",
              }}
            >
              TUE 4 AUG
            </span>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "7px" }}
            >
              <div
                style={{
                  borderLeft: "2px solid var(--brand)",
                  padding: "7px 9px",
                  borderRadius: "0 8px 8px 0",
                  background:
                    "color-mix(in oklab, var(--brand) 14%, transparent)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#E8EDEE",
                  }}
                >
                  09:30 Root canal
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontVariantNumeric: "tabular-nums",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Dr. Hadi · Chair 2
                </div>
              </div>
              <div
                style={{
                  borderLeft: "2px solid rgba(255,255,255,.2)",
                  padding: "7px 9px",
                  borderRadius: "0 8px 8px 0",
                  background: "rgba(255,255,255,.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#E8EDEE",
                  }}
                >
                  10:15 Cleaning
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontVariantNumeric: "tabular-nums",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Dr. Sara · Chair 1
                </div>
              </div>
              <div
                style={{
                  borderLeft: "2px solid rgba(255,255,255,.2)",
                  padding: "7px 9px",
                  borderRadius: "0 8px 8px 0",
                  background: "rgba(255,255,255,.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#E8EDEE",
                  }}
                >
                  11:00 Crown fit
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontVariantNumeric: "tabular-nums",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Dr. Hadi · Chair 2
                </div>
              </div>
            </div>
          </div>

          <div
            data-tile=""
            style={{
              background: "#101B1F",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "14px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: ".09em",
                  color: "var(--muted-foreground)",
                }}
              >
                INVOICE #4812
              </span>
              <span
                style={{
                  fontSize: "clamp(22px,2.2vw,30px)",
                  fontWeight: 700,
                  letterSpacing: "-.035em",
                  color: "#E8EDEE",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                $1,450
              </span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Paid
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#E8EDEE",
                    }}
                  >
                    $900
                  </span>
                </div>
                <div
                  style={{
                    height: "5px",
                    borderRadius: "999px",
                    background: "var(--border)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    data-bar=""
                    style={{
                      width: "62%",
                      height: "100%",
                      borderRadius: "999px",
                      background: "var(--brand)",
                    }}
                  />
                </div>
              </div>
            </div>
            <span style={{ fontSize: "10px", color: "var(--brand)" }}>
              BALANCE $550
            </span>
          </div>

          <div
            data-tile=""
            style={{
              background: "#101B1F",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: ".09em",
                color: "var(--muted-foreground)",
              }}
            >
              REVENUE · 8 WEEKS
            </span>
            <div
              data-bars=""
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "6px",
                height: "74px",
              }}
            >
              {[
                { h: "42%", accent: false },
                { h: "56%", accent: false },
                { h: "48%", accent: false },
                { h: "70%", accent: false },
                { h: "62%", accent: true },
                { h: "84%", accent: false },
                { h: "76%", accent: true },
                { h: "100%", accent: true },
              ].map((bar, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: bar.h,
                    borderRadius: "4px 4px 2px 2px",
                    background: bar.accent
                      ? "var(--brand)"
                      : "rgba(255,255,255,.12)",
                  }}
                />
              ))}
            </div>
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "8px" }}
            >
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  letterSpacing: "-.03em",
                  color: "#E8EDEE",
                }}
              >
                18.4k
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--brand)",
                }}
              >
                +8.1%
              </span>
            </div>
          </div>

          <div
            data-tile=""
            data-span=""
            style={{
              gridColumn: "1/-2",
              background: "#101B1F",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: ".09em",
                  color: "var(--muted-foreground)",
                }}
              >
                INVENTORY · LOW STOCK
              </span>
              <span
                style={{ fontSize: "11px", fontWeight: 700, color: "#F49E0C" }}
              >
                3 items
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#F49E0C",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#E8EDEE",
                    flex: 1,
                  }}
                >
                  Composite A2 syringe
                </span>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "var(--muted-foreground)",
                  }}
                >
                  4 left
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#F49E0C",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#E8EDEE",
                    flex: 1,
                  }}
                >
                  Anesthetic cartridges
                </span>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "var(--muted-foreground)",
                  }}
                >
                  12 left
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--brand)",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#E8EDEE",
                    flex: 1,
                  }}
                >
                  Impression trays
                </span>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "var(--muted-foreground)",
                  }}
                >
                  2 left
                </span>
              </div>
            </div>
          </div>

          <div
            data-tile=""
            style={{
              background: "#E8EDEE",
              borderRadius: "var(--radius-xl)",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: ".09em",
                color: "#6e6e6e",
              }}
            >
              PAYROLL · AUG
            </span>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3px" }}
            >
              <span
                style={{
                  fontSize: "clamp(20px,2vw,26px)",
                  fontWeight: 700,
                  letterSpacing: "-.035em",
                  color: "#0A1416",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                $62.8k
              </span>
              <span
                style={{ fontSize: "11px", fontWeight: 600, color: "#6e6e6e" }}
              >
                incl. $8.1k commissions
              </span>
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#0A1416",
                borderBottom: "1px solid rgba(0,0,0,.28)",
                alignSelf: "flex-start",
                paddingBottom: "2px",
              }}
            >
              Run payroll →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
