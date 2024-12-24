import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigator from './navigator/page';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Landing Page",
  description: "JJWithNoSauce's landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <div className="sticky"><Navigator/></div>
        
      </body>
      
    </html>
    

  );
}
