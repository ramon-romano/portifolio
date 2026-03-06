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
    icon: "/img/logo.png",
    apple: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${oswald.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
