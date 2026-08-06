import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Note: the source copy reads "Seven modules. One clinic." in the heading,
// but the markup itself only defines six module tiles (numbered 01-06).
// Copied verbatim — not fabricating a seventh tile to match the heading.
const modules = [
  {
    number: "01",
    title: "Clinical",
    description:
      "The full patient story — chart, plan, history and notes — on one screen, editable chairside.",
    bullets: [
      "Patient management",
      "Digital tooth chart (odontogram)",
      "Treatment plans",
      "Treatment history",
      "Patient notes",
    ],
  },
  {
    number: "02",
    title: "Scheduling",
    description:
      "Every chair and every dentist on one calendar, with status tracking from booked to paid.",
    bullets: [
      "Appointment calendar",
      "Dentist scheduling",
      "Appointment status tracking",
      "Patient appointment history",
    ],
  },
  {
    number: "03",
    title: "Business",
    description:
      "Payroll that reads itself from the schedule — hours, commissions and attendance in one run.",
    bullets: [
      "Payroll management",
      "Commission calculations",
      "Staff management",
      "Attendance tracking",
    ],
  },
  {
    number: "04",
    title: "Inventory",
    description:
      "Stock that counts itself down as treatments are completed, and warns you before you run out.",
    bullets: [
      "Inventory management",
      "Material stock tracking",
      "Low-stock alerts",
    ],
  },
  {
    number: "05",
    title: "Financial",
    description:
      "Invoice from the treatment plan, track part-payments, and see exactly what is still owed.",
    bullets: [
      "Billing & invoices",
      "Payment tracking",
      "Revenue reports",
      "Financial analytics",
    ],
  },
  {
    number: "06",
    title: "Analytics",
    description:
      "The numbers an owner actually asks for, ready before the meeting starts.",
    bullets: [
      "Dashboard overview",
      "Revenue insights",
      "Appointment statistics",
      "Clinic performance reports",
    ],
  },
];

export function Modules() {
  return (
    <section
      id="modules"
      style={{
        position: "relative",
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "clamp(56px,7vw,80px) clamp(18px,4vw,40px) 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          paddingBottom: "28px",
          borderBottom: "1px solid var(--border)",
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
            EVERYTHING IN ONE PLACE
          </span>
          <h2
            data-r=""
            style={{
              margin: 0,
              fontSize: "clamp(32px,3.4vw,44px)",
              lineHeight: 1.06,
              letterSpacing: "-.035em",
              fontWeight: 700,
              color: "#E8EDEE",
            }}
          >
            Seven modules. One clinic.
          </h2>
        </div>
        <p
          data-r=""
          style={{
            margin: 0,
            maxWidth: "380px",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "var(--muted-foreground)",
          }}
        >
          Turn on what you need today and add the rest as you grow — every
          module shares the same patient record and the same permissions.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
          gap: "16px",
          marginTop: "28px",
        }}
      >
        {modules.map((m) => (
          <Card
            key={m.number}
            data-tile=""
            className="gap-[18px] border border-border py-6 ring-0 transition-colors duration-[250ms] hover:border-[color-mix(in_oklab,var(--ring)_45%,var(--border))] hover:bg-muted"
          >
            <CardHeader className="flex flex-row items-center justify-between gap-0 px-6">
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "-.02em",
                  color: "#E8EDEE",
                }}
              >
                {m.title}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontVariantNumeric: "tabular-nums",
                  color: "var(--muted-foreground)",
                }}
              >
                {m.number}
              </span>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-[18px] px-6">
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--muted-foreground)",
                }}
              >
                {m.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                  marginTop: "auto",
                }}
              >
                {m.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--brand)",
                      }}
                    />
                    <span style={{ fontSize: "14px", color: "rgba(232,237,238,.8)" }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
