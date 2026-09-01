import { SiteChrome } from "@/components/site/site-chrome";
import { SiteFooter } from "@/components/site/site-footer";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#F6F4EF] text-[#18252B] flex flex-col font-sans">
      <SiteChrome />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28">
        <div className="max-w-xl w-full text-center space-y-10">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#2F6F6A] uppercase font-mono block mb-3">
              Direct Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#18252B] mb-4">
              Get in touch
            </h1>
            <p className="text-base sm:text-lg text-[#5F696B] leading-relaxed text-balance">
              Have questions about deploying Dream Dental in your practice? Reach out through any of our direct clinical channels.
            </p>
          </div>
          
          <div className="space-y-4 text-left">
            <div className="bg-white border border-[#18252B]/10 rounded-2xl p-6 flex items-center justify-between gap-4 shadow-sm hover:border-[#2F6F6A]/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2F6F6A]/10 text-[#2F6F6A] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#899193] tracking-wider uppercase block">
                    Email
                  </span>
                  <a
                    href="mailto:seif.safina27@gmail.com"
                    className="text-base font-semibold text-[#18252B] hover:text-[#2F6F6A] transition-colors"
                  >
                    seif.safina27@gmail.com
                  </a>
                </div>
              </div>
              <span className="text-xs text-[#2F6F6A] font-medium hidden sm:inline">Write →</span>
            </div>

            <div className="bg-white border border-[#18252B]/10 rounded-2xl p-6 flex items-center justify-between gap-4 shadow-sm hover:border-[#2F6F6A]/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#D9795B]/10 text-[#D9795B] flex items-center justify-center flex-shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#899193] tracking-wider uppercase block">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com/dreamdental.exe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-[#18252B] hover:text-[#D9795B] transition-colors"
                  >
                    @dreamdental.exe
                  </a>
                </div>
              </div>
              <span className="text-xs text-[#D9795B] font-medium hidden sm:inline">Follow →</span>
            </div>

            <div className="bg-white border border-[#18252B]/10 rounded-2xl p-6 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#54799A]/10 text-[#54799A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#899193] tracking-wider uppercase block">
                    Headquarters
                  </span>
                  <span className="text-base font-medium text-[#18252B]">
                    Cairo, Egypt
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#899193] font-mono">UTC+2</span>
            </div>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}
