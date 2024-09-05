import React from "react";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "Ecommerce App - Shop Now",
  description = "MERN Stack Project",
  keywords = "mern, react, node, mongodb, express",
  author = "Toufiq Gilani Rabbu",
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
