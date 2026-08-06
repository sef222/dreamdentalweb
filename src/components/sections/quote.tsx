import Image from "next/image";

// Source lines 535-544: the blockquote/testimonial block.
export function Quote() {
  return (
    <section
      style={{
        position: "relative",
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "clamp(60px,8vw,100px) clamp(18px,4vw,40px)",
      }}
    >
      <blockquote
        data-r=""
        style={{
          margin: 0,
          maxWidth: "min(940px,100%)",
          fontSize: "clamp(23px,2.5vw,32px)",
          lineHeight: 1.4,
          letterSpacing: "-.025em",
          fontWeight: 500,
          color: "#E8EDEE",
          textWrap: "pretty",
        }}
      >
        &ldquo;We closed three spreadsheets and one whiteboard in the first
        week. The part I did not expect: the commission argument at month-end
        just stopped happening.&rdquo;
      </blockquote>
      <div
        data-r=""
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginTop: "28px",
        }}
      >
        <Image
          src="/testimonial-hadi.jpg"
          alt="Dr. Hadi Al-Mansour"
          width={40}
          height={40}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid var(--border)",
            flex: "none",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#E8EDEE" }}>
            Dr. Hadi Al-Mansour
          </span>
          <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
            Owner, Al Noor Dental · 3 clinics
          </span>
        </div>
      </div>
    </section>
  );
}
