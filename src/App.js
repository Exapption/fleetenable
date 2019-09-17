import React, { Component } from "react";
import "antd/dist/antd.css";
import "../src/stylesheets/application.scss";
import HeaderMenu from "./javascript/components/HeaderMenu";
import Main from "./Main";
import FooterContent from "./javascript/components/FooterContent";

const App = () => (
  <div>
    <HeaderMenu />
      <Main />
    <FooterContent />
  </div>
);
export default App;
