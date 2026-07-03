import "./legispro-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeScripts from "@/components/ThemeScripts";
import ScrollReveal from "@/components/ScrollReveal";

// Runs during HTML parse (before content paints) so scroll-reveal has no flash.
// Skips when IntersectionObserver is unavailable or reduced-motion is set, in
// which case the default CSS load animation plays and nothing is ever hidden.
const revealBootstrap =
  "(function(){try{if(!('IntersectionObserver' in window))return;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.classList.add('js-reveal');}catch(e){}})();";

export const metadata = {
  metadataBase: new URL("https://www.legisproadvisors.com"),
  title: {
    default: "byteSquad — Build. Launch. Grow.",
    template: "%s - byteSquad",
  },
  description:
    "byteSquad is a software development company that helps you build, launch and grow — custom apps, websites and ready-to-launch white-label products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero-photo.webp" fetchPriority="high" />
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ThemeScripts />
        <ScrollReveal />
      </body>
    </html>
  );
}
