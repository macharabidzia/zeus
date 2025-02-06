import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex justify-center items-center">{children}</div>
  );
};

export default Layout;
