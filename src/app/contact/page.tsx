import { SiteChrome } from "@/components/site/site-chrome";
import { SiteFooter } from "@/components/site/site-footer";

export default function ContactPage() {
  return (
    <div
      style={{
        position: "relative",
        background: "#0A1416",
        color: "#E8EDEE",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "clip",
      }}
    >
      <SiteChrome />
      
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "140px 20px 100px" }}>
        <div style={{ maxWidth: "600px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div>
            <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 800, letterSpacing: "-.04em", margin: "0 0 16px", color: "#E8EDEE" }}>
              Get in touch
            </h1>
            <p style={{ color: "var(--muted-foreground)", fontSize: "16.5px", lineHeight: 1.65, textWrap: "balance" }}>
              Have questions? We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ 
              background: "#101B1F", 
              border: "1px solid var(--border)", 
              borderRadius: "var(--radius-xl)", 
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap"
            }}>
              <span style={{ fontSize: "12px", color: "var(--muted-foreground)", letterSpacing: ".09em", fontWeight: 500 }}>EMAIL</span>
              <a href="mailto:seif.safina27@gmail.com" style={{ fontSize: "18px", fontWeight: 600, color: "#E8EDEE", textDecoration: "none" }} className="hover:text-[var(--brand)] transition-colors">
                seif.safina27@gmail.com
              </a>
            </div>

            <div style={{ 
              background: "#101B1F", 
              border: "1px solid var(--border)", 
              borderRadius: "var(--radius-xl)", 
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap"
            }}>
              <span style={{ fontSize: "12px", color: "var(--muted-foreground)", letterSpacing: ".09em", fontWeight: 500 }}>INSTAGRAM</span>
              <a href="https://instagram.com/dreamdental.exe" target="_blank" rel="noopener noreferrer" style={{ fontSize: "18px", fontWeight: 600, color: "#E8EDEE", textDecoration: "none" }} className="hover:text-[var(--brand)] transition-colors">
                @dreamdental.exe
              </a>
            </div>


          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}
