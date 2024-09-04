import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, description, keywords, author }) => {
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
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - Shop Now",
  description: "MERN Stack Project",
  keywords: "mern, react, node, mongodb, express",
  author: "Toufiq Gilani Rabbu",
};

export default Layout;
