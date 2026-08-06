const logos = [
  "Al Noor Dental",
  "Smile Studio",
  "Pearl Clinics",
  "Dr. Hadi & Partners",
  "Lusail Ortho",
];

export function Logos() {
  return (
    <section
      style={{
        position: "relative",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        data-logos=""
        style={{
          display: "flex",
          alignItems: "center",
          gap: "44px",
          flexWrap: "wrap",
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "20px clamp(18px,4vw,40px)",
        }}
      >
        <span
          data-r=""
          style={{
            fontSize: "11px",
            letterSpacing: ".14em",
            color: "var(--muted-foreground)",
            whiteSpace: "nowrap",
          }}
        >
          TRUSTED BY CLINICS ACROSS THE GULF
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            marginLeft: "auto",
            flexWrap: "wrap",
          }}
        >
          {logos.map((name) => (
            <span
              key={name}
              data-r=""
              style={{
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "-.02em",
                color: "var(--muted-foreground)",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
