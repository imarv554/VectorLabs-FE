import type { Metadata } from "next";
import { Geist_Mono, Ubuntu } from "next/font/google";
import { ChatProvider } from "@/context";
import Chat from "@/components/ui/customerChat";
import ThemeProviderClient from "@/components/applayout/ThemeProviderClient";
import "./globals.css";
import "./page-scroll.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VetorLabs • Home",
  description:
    "Vetor Labs is an innovative digital platform empowering Web2 and Web3 entrepreneurs with AI, blockchain, and advanced business tools.",
  openGraph: {
    title: "VetorLabs",
    description:
      "Vetor Labs is an innovative digital platform empowering Web2 and Web3 entrepreneurs with AI, blockchain, and advanced business tools.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs",
    description:
      "Vetor Labs is an innovative digital platform empowering Web2 and Web3 entrepreneurs with AI, blockchain, and advanced business tools.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
  metadataBase: new URL("https://vetorlabs.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${ubuntu.className} antialiased`}>
        <ChatProvider>
          <ThemeProviderClient>
            {children}
            <Chat />
          </ThemeProviderClient>
        </ChatProvider>
      </body>
    </html>
  );
}
