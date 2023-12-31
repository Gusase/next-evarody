import Navigation from "@/components/Navigation";
import Progress from "@/components/Partials/Progress";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Navigation/Footer";
import { Providers } from "./providers";

const mona = localFont({
  src: "./Mona-Sans.woff2",
  variable: "--font-mona",
  weight: "200 900",
});

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <body
        className={`${mona.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Progress />
        <Navigation />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
