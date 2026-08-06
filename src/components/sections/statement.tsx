export function Statement() {
  return (
    <section
      style={{
        position: "relative",
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "clamp(64px,9vw,120px) clamp(18px,4vw,40px) 40px",
      }}
    >
      <p
        data-words=""
        style={{
          margin: 0,
          maxWidth: "1000px",
          fontSize: "clamp(28px,3.4vw,44px)",
          lineHeight: 1.28,
          letterSpacing: "-.03em",
          fontWeight: 600,
          textWrap: "pretty",
        }}
      >
        Most clinics run on four systems that never talk to each other. Dream
        Dental replaces the lot — one login, one patient record, one number
        at the end of the month.
      </p>
    </section>
  );
}
