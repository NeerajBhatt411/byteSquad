import "./legispro-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeScripts from "@/components/ThemeScripts";

export const metadata = {
  metadataBase: new URL("https://www.legisproadvisors.com"),
  title: {
    default: "byteSquad",
    template: "%s - byteSquad",
  },
  description:
    "byteSquad — helping businesses navigate complex legal and regulatory landscapes.",
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
