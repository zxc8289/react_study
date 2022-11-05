import Header from "components/commons/Header";
import React from "react";

const HeadlessLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HeadlessLayout;
