import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import CartProvider from "@/components/Provider";
import { ToastContainer } from "react-toastify";
import { ClerkProvider } from "@clerk/nextjs";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Tuck",
  description: "Fast Food Items here ",
  icons:"/cap.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className} ${font.className} antialiased`}>
          <div className="max-w-[1920px] mx-auto text-white ">
            <CartProvider>
              {children}
              <Footer />
              <ToastContainer />
            </CartProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
