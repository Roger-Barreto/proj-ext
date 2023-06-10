import "./globals.css";
import "normalize.css/normalize.css";
import { Inter } from "next/font/google";
import NavbarHeader from "./components/NavbarHeader/NavbarHeader";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pastoral da Ecologia Integral",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="MainContent">
          <NavbarHeader />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
