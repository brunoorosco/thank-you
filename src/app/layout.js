import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Thank-You",
  description: "Agrafdecimentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer class="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
          <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
            © 2024 Copyright:
            <label> Bruno Orosco</label>
          </div>
        </footer>
      </body>
    </html>
  );
}
