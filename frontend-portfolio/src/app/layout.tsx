import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500'] 
});

export const metadata = {
  title: "Portfólio | Ramon",
  description: "Meu portfólio de desenvolvimento",
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
