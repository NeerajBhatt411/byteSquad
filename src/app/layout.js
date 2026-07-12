import "./legispro-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeScripts from "@/components/ThemeScripts";
import SiteChrome from "@/components/SiteChrome";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "byteSquad",
  url: "https://www.bytesquad.com",
  slogan: "Build. Launch. Grow.",
  description:
    "byteSquad is a software development company building apps, websites and white-label products.",
};

export const metadata = {
  metadataBase: new URL("https://www.bytesquad.com"),
  title: {
    default: "byteSquad — Build. Launch. Grow.",
    template: "%s - byteSquad",
  },
  description:
    "byteSquad is a software development company that helps you build, launch and grow — custom apps, websites and ready-to-launch white-label products.",
  keywords: [
    "software development company",
    "app development",
    "web development",
    "white-label products",
    "Flutter",
    "React",
    "Node.js",
    "byteSquad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "byteSquad",
    title: "byteSquad — Build. Launch. Grow.",
    description:
      "Custom apps, websites and ready-to-launch white-label products.",
    url: "https://www.bytesquad.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "byteSquad — Build. Launch. Grow.",
    description:
      "Custom apps, websites and ready-to-launch white-label products.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <link rel="preload" as="image" href="/images/hero-photo.webp" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteChrome>
          <Header />
        </SiteChrome>
        {children}
        <SiteChrome>
          <Footer />
          <WhatsAppButton />
        </SiteChrome>
        <ThemeScripts />
      </body>
    </html>
  );
}
