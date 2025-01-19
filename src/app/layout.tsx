import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NotificationBar from "@/components/NotificationBar";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "ePlates",
  description: "Make your own plate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased min-h-screen font-rubik`}
      >
        {/* <NotificationBar/> */}
        {/* <Header/> */}
        <div className=" mt-5">
        {children}
        <Toaster />
        </div>
      </body>
    </html>
  );
}
