import "./legispro-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeScripts from "@/components/ThemeScripts";

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
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ThemeScripts />
      </body>
    </html>
  );
}
