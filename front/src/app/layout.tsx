import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "부탁케어",
  description: "지금껏 없던 편리한 요양보호사 매칭 서비스 부탁케어",
  icons: {
    icon: "assets/icons/icon_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body
        className={`${pretendard.className} bg-white text-black flex w-dvw h-dvh items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
