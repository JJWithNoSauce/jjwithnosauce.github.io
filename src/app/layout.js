import { Geist, Geist_Mono} from "next/font/google";
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
  title: "JJWithNoSauce!",
  description: "JJWithNoSauce's landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header class='shadow-md font-sans tracking-wide relative z-50 opacity-50 hover:opacity-100'>
      <section class='py-2 bg-[#ff5733] text-white text-center px-10'>
        <p class='text-sm'><strong class="mx-3">Website is heavily under construction, Mobile UI won't work accordingly. If you are on mobile, please switch to desktop for the best experience.</strong></p>
      </section>
      </header>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <div className="sticky"><Navigator/></div>
        
      </body>
      
    </html>
    

  );
}
