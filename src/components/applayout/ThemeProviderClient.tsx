"use client";
import { ThemeProvider } from "@material-tailwind/react";

export default function ThemeProviderClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
