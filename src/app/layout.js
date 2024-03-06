"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";
import store from "@/store/store";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="fullBg">
      <body
        className={`${inter.className} p-[1em] relative w-[100%] backdrop-blur-[40px] bg-gradient-to-b from-[white]/30 to-[black]/40 bg-white/30 lg:p-[4em] pb-[0em] md:p-[2em]`}
      >
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
};

const LayoutWithRedux = ({ children }) => (
  <Provider store={store}>
    <RootLayout>{children}</RootLayout>
  </Provider>
);

export default LayoutWithRedux;
