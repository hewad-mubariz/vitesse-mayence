import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Manrope, Permanent_Marker } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
});

const brush = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
});

export const metadata: Metadata = {
  title: "Vitesse Mayence | Fußball. Gemeinschaft. Mainz.",
  description:
    "Mehr als ein Verein. Vitesse Mayence – lokal, leidenschaftlich, echt. Seit 1986 in Mainz-Bretzenheim.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${body.variable} ${script.variable} ${brush.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
