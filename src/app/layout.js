import "./globals.css";

import { Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import { CartProvider } from "./[slug]/menu/contexts/cart";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Congo Burger",
  description: "Best burger in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <CartProvider>{children}</CartProvider>

        <Toaster />
      </body>
    </html>
  );
}
