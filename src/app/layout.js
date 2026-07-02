import "./legispro-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeScripts from "@/components/ThemeScripts";

export const metadata = {
  metadataBase: new URL("https://www.legisproadvisors.com"),
  title: {
    default: "byteSquad — Because every byte matters",
    template: "%s - byteSquad",
  },
  description:
    "byteSquad is a software development company building apps, websites and white-label products. Because every byte matters.",
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
