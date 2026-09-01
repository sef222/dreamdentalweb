import { SiteChrome } from "@/components/site/site-chrome";
import { SiteFooter } from "@/components/site/site-footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#F6F4EF] text-[#18252B] flex flex-col font-sans">
      <SiteChrome />
      
      <main className="flex-1 flex items-center justify-center px-4 py-24 sm:py-32">
        <div className="max-w-md w-full text-center space-y-6">
          <span className="text-xs font-mono font-semibold text-[#2F6F6A] uppercase tracking-widest block">
            404 Error
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#18252B]">
            Page Not Found
          </h1>
          <p className="text-base text-[#5F696B] leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to another location.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2F6F6A] text-white text-sm font-semibold hover:bg-[#214F4B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}
