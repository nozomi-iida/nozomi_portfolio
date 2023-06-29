import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

const siteName = "Nozomi's portfolio";
const description = "Nozomi's portfolio";
const url = "nozomi-portfolio.vercel.app";

export const metadata = {
  title: {
    default: siteName,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@nozo_i0106",
  },
  verification: {
    google: "サーチコンソールのやつ",
  },
  alternates: {
    canonical: url,
  },
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
        <Toaster />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </body>
    </html>
  );
}
