import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "devicon/devicon.min.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Julien LIETART - Expert Fullstack Developer | React, NestJS, FastAPI",
  description:
    "Experienced freelance fullstack developer specializing in React, NestJS, and FastAPI. Offering code audits, migrations, and custom development solutions for modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white w-full px-4 md:px-24`}
      >
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" />
      </body>
    </html>
  );
}
