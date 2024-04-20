"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] });
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
        <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
          <Header />
    
          {children}
         
          <Footer />
          <ScrollToTop />
          <WhatsAppWeget/>
          </motion.main>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import WhatsAppWeget from "@/components/WhatsappWidget";

