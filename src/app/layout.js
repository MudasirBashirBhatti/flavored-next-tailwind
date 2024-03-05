import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flavoured | Buy your favourite coffee",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="fullBg">
      <body
        className={`${inter.className}p-[1em] w-[100%] backdrop-blur-[40px] bg-gradient-to-b from-[white]/30 to-[black]/40 bg-white/30 lg:p-[4em] pb-[0em] md:p-[2em]`}
      >
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
