import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "../components/Transition";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Junaid Faiz Portfolio",
  description: "A portfolio website to showcase my work",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Transition>
          {children}
        </Transition>
      
      </body>
    </html>
  );
}
