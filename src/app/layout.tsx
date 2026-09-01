import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Dental — Clinic Management Software",
  description:
    "Dream Dental brings patients, appointments, treatments, imaging and finances into one connected workspace. Purpose-built for modern dental practices.",
  keywords: [
    "dental software",
    "clinic management",
    "dental EHR",
    "dental charting",
    "odontogram",
    "x-ray viewer",
    "dental clinic OS",
  ],
  openGraph: {
    title: "Dream Dental — Clinic Management Software",
    description:
      "Everything your clinic does. One place to run it. Purpose-built dental clinic operating system.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon.png?v=2", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
        <script
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
              "applicationCategory": "HealthCareApplication",
              "operatingSystem": "Web",
              "description":
                "All-in-one dental clinic management software bringing patient profiles, appointments, dental charting, imaging, and finances into one workspace.",
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#F6F4EF] text-[#18252B] font-sans selection:bg-[#2F6F6A] selection:text-white"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
