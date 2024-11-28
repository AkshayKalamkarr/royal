import { Kanit } from "next/font/google";
import "./globals.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Enquiry from "../components/EnquiryButton"

// theme provider
import { ThemeProvider } from "../components/ThemeProvider";
import ContactButton from "@/components/ContactButton";
import ResponsiveBanner from "@/components/ResponsiveBanner";

const kanit = Kanit({ weight:'500', subsets: ["thai"],
  weight:['500'], 
  display:"swap"
});

export const metadata = {
  title: "Royal Crown Infra",
  description: "Royal Crown Infra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kanit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          <ContactButton/>
          {children}
          <Enquiry />
          <ResponsiveBanner/>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
