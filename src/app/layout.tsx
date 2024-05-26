import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";
import { TransactionProvider } from "./context/TransactionContext";

export const metadata: Metadata = {
  title: "Send ETH App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TransactionProvider>
          <div className=" min-h-screen">
            <div className="gradient-bg-initial">
              <Navbar />
            </div>
            {children}
          </div>
        </TransactionProvider>
      </body>
    </html>
  );
}
