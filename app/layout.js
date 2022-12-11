import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="relative m-0">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
