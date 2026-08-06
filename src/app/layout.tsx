import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Dental — The clinic operating system",
  description:
    "Dream Dental keeps the front desk, the surgery and the back office on the same page — appointments, odontogram, treatment plans, billing, payroll and inventory in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below adds `anim` to this
    // element before React hydrates, so the client className legitimately
    // differs from the server's. Scoped to <html>; children still diff.
    <html
      lang="en"
      className={`${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Runs before first paint. Marks the document as animating so the
          // hero can start hidden — but only when scripting is live and the
          // visitor has not asked for reduced motion, so the content is never
          // hidden by a state nothing will ever reveal.
          dangerouslySetInnerHTML={{
            __html: `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("anim")}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Dream Dental",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "All-in-one dental clinic management — clinical, business and financial in one system.",
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
