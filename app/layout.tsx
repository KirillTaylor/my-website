import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import 'style/globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body>
          <div className="wrapper">
            <Header />
            <div className="container">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </html>
    )
  }