import "./globals.css";
import type { Metadata } from "next";
import SessionProvider from "@/contexts/SessionProvider";

export const metadata: Metadata = {
  title: "Next Auth Demo",
  description: "Demonstração de uso do Next.js 13 com o NextAuth.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-800 selection:bg-teal-700 selection:text-white">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
