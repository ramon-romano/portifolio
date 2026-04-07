import { Oswald } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Portfolio | Ramon Romano",
  description: "Meu portfolio de desenvolvimento",
  icons: {
    icon: "/img/logo.png?v=1.1",
    apple: "/img/logo.png?v=1.1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth font-light">
      <body className={`${oswald.className} bg-zinc-950 text-white min-h-screen relative`}>
        {/* Background Atmosphere */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-purple-500/5 blur-[120px] animate-pulse" />
        </div>
        {children}
      </body>
    </html>
  );
}
