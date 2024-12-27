import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Transition from './Transition';




export const metadata: Metadata = {
  title: "وب سایت دکتر دکتر",
  description: "دکتر دکتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <Header />
        
          <Transition>

            <div className="text-secondery-default">
                {children}
            </div>
     
          </Transition>
        <Footer/>
      </body>
    </html>
  );
}
