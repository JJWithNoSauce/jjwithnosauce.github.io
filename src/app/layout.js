import { Geist, Geist_Mono, IBM_Plex_Sans_Thai  } from "next/font/google";
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

const IbmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--fong-"
});

export const metadata = {
  title: "JJWithNoSauce!",
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
