import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Cta() {
  return (
    <section
      id="cta"
      style={{
        position: "relative",
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-320px",
          width: "900px",
          height: "600px",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 26%, transparent), transparent)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(64px,9vw,110px) clamp(18px,4vw,40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2
          data-r=""
          style={{
            margin: 0,
            fontSize: "clamp(38px,4.6vw,56px)",
            lineHeight: 1.04,
            letterSpacing: "-.04em",
            fontWeight: 800,
            color: "#E8EDEE",
            textWrap: "balance",
          }}
        >
          Run the whole clinic
          <br />
          from one screen.
        </h2>
        <p
          data-r=""
          style={{
            margin: "20px 0 0",
            maxWidth: "520px",
            fontSize: "16.5px",
            lineHeight: 1.65,
            color: "var(--muted-foreground)",
          }}
        >
          A 20-minute demo with your own workflow — we will map your chairs,
          staff and treatment list before you commit to anything.
        </p>

      </div>
    </section>
  );
}
