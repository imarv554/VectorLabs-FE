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
  title: "Affidex Lab • Home",
  description:
    "Incubation laboratory for core utility projects. Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.",
  openGraph: {
    title: "Affidex Lab",
    description:
      "Incubation laboratory for core utility projects. Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://affidexlab.netlify.app",
    siteName: "Affidex Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affidex Lab",
    description:
      "Incubation laboratory for core utility projects. Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
  metadataBase: new URL("https://affidexlab.netlify.app"),
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
