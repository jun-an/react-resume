import React from "react";
import "./App.css";
import Header from "./components/Header/Header.lazy";
import Main from "./components/Main/Main.lazy";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
