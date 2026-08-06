import { SiteChrome } from "@/components/site/site-chrome";
import { SiteFooter } from "@/components/site/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
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
        <div style={{ maxWidth: "600px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "clamp(60px,8vw,100px)", fontWeight: 800, letterSpacing: "-.04em", margin: "0 0 16px", color: "#E8EDEE" }}>
              404
            </h1>
            <p style={{ color: "var(--muted-foreground)", fontSize: "16.5px", lineHeight: 1.65, textWrap: "balance" }}>
              We can't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
          </div>
          
          <a
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-11 px-8 text-sm hover:bg-[color-mix(in_oklab,var(--primary)_90%,black)] focus-visible:ring-3 focus-visible:ring-ring/50",
            )}
          >
            Go back home
          </a>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}
