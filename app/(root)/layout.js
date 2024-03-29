import Header from "@/components/shared/Header";
import React from "react";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
