import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Nozomi's portfolio",
  description: "Nozomi's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </body>
    </html>
  );
}
