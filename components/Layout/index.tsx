import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <div className="">
        <Navbar />
      <div>{children}</div>
       <footer>
        <Footer />
      </footer>
    </div>
  );
}
