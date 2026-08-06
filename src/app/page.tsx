import { SiteChrome } from "@/components/site/site-chrome";
import { SiteFooter } from "@/components/site/site-footer";
import { PageAnimations } from "@/components/site/page-animations";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Modules } from "@/components/sections/modules";
import { Odontogram } from "@/components/sections/odontogram";
import { Business } from "@/components/sections/business";
import { Proof } from "@/components/sections/proof";
import { Security } from "@/components/sections/security";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        background: "#0A1416",
        color: "#E8EDEE",
        minHeight: "100vh",
        overflowX: "clip",
      }}
    >
      <SiteChrome />
      <Hero />
      <Statement />
      <Modules />
      <Odontogram />
      <Business />
      <Proof />
      <Security />
      <Cta />
      <SiteFooter />
      <PageAnimations />
    </div>
  );
}
