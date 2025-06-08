import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pradhumn Pande | Personal Portfolio",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
  className={`${inter.className} bg-black text-white relative pt-28 sm:pt-36`}
>
  {/* Cool dark blur effect
  <div className="absolute top-[-10rem] -z-10 right-[-10rem] h-[40rem] w-[40rem] rounded-full blur-[8rem] bg-purple-900/30 "></div>
  <div className="absolute top-[5rem] -z-10 left-[-15rem] h-[35rem] w-[35rem] rounded-full blur-[6rem] bg-blue-800/30 animate-pulse delay-200"></div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
