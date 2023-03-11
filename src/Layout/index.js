import React from "react";
import Header from "./Header";
import Home from "./Home";

function Layout() {
  return (
    <>
      <Header />
        <div className="container">
          <Home />
        </div>
    </>
  );
}

export default Layout;
