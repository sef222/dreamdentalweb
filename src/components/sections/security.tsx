import { Card } from "@/components/ui/card";

const items = [
  {
    title: "Roles & permissions",
    description:
      "Owner, dentist, assistant, reception and accountant presets you can edit.",
  },
  {
    title: "Secure authentication",
    description: "Encrypted sessions, optional 2FA, and device-level sign-out.",
  },
  {
    title: "Responsive interface",
    description:
      "Same clinic, same data — front desk monitor or tablet chairside.",
  },
  {
    title: "Fast search & filtering",
    description: "Find a patient, invoice or material in a keystroke.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      style={{
        position: "relative",
        borderTop: "1px solid var(--border)",
        background: "#0C171A",
      }}
    >
      <div
        data-sec-grid=""
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(60px,8vw,100px) clamp(18px,4vw,40px)",
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
            SYSTEM
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
            Everyone sees exactly what they should.
          </h2>
          <p
            data-r=""
            style={{
              margin: "20px 0 0",
              maxWidth: "460px",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
            }}
          >
            Role-based permissions down to the module: receptionists book,
            dentists chart, accountants invoice, owners see everything.
            Secure authentication, full audit history, and search that
            returns in milliseconds.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))",
            gap: "14px",
          }}
        >
          {items.map((item) => (
            <Card
              key={item.title}
              data-tile=""
              className="gap-[8px] border border-border py-5 ring-0 transition-colors duration-[250ms] hover:border-[color-mix(in_oklab,var(--ring)_45%,var(--border))] hover:bg-muted"
            >
              <div className="flex flex-col gap-[8px] px-5">
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#E8EDEE" }}>
                  {item.title}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {item.description}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
