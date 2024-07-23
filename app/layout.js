import { Roboto } from "next/font/google";
import "./globals.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

// theme provider
import { ThemeProvider } from "../components/ThemeProvider";

const Josef = Roboto({ weight:'400', subsets: ["latin"],
  weight:["400","500","700","900"], 
  display:"swap"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Josef.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
