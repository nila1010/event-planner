import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your NEXT event",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/add-event">Add event</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}