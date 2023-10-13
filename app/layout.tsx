import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Lexend_Mega } from "next/font/google";

const lexend = Lexend_Mega({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeoBoolean Search Builder",
  description: "Boolean Search Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.className} min-h-screen flex`}>
        <Sidebar />
        <div className="flex flex-col flex-1 h-screen bg-[#BAFCA2]">{children}</div>
      </body>
    </html>
  );
}
