import { SiteChrome } from "@/components/site/site-chrome";
import { SiteFooter } from "@/components/site/site-footer";
import { PageAnimations } from "@/components/site/page-animations";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { PatientWorkflow } from "@/components/sections/patient-workflow";
import { AppointmentsSection } from "@/components/sections/appointments-section";
import { DentalChartSection } from "@/components/sections/dental-chart-section";
import { ClinicalImaging } from "@/components/sections/clinical-imaging";
import { OperationsSection } from "@/components/sections/operations-section";
import { FinancialSection } from "@/components/sections/financial-section";
import { CompleteSystem } from "@/components/sections/complete-system";
import { Security } from "@/components/sections/security";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F6F4EF] text-[#18252B] overflow-x-clip font-sans">
      <SiteChrome />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. The Problem */}
        <ProblemSection />

        {/* 3. Patient Workflow */}
        <PatientWorkflow />

        {/* 4. Appointments */}
        <AppointmentsSection />

        {/* 5. Dental Chart — Signature Chairside Section */}
        <DentalChartSection />

        {/* 6. Clinical Imaging */}
        <ClinicalImaging />

        {/* 7. Operations */}
        <OperationsSection />

        {/* 8. Financial Management */}
        <FinancialSection />

        {/* 9. Complete System */}
        <CompleteSystem />

        {/* 10. Security */}
        <Security />

        {/* 11. Final CTA */}
        <Cta />
      </main>
      <SiteFooter />
      <PageAnimations />
    </div>
  );
}
