import React, { FC } from "react";
import About from "../About/About.lazy";
import Education from "../Education/Education.lazy";
import Experience from "../Experience/Experience.lazy";
import "./Main.css";

const Main: FC = () => (
  <main className="main">
    <div className="two-columns">
      <div className="column-1">
        <About />
        <Experience />
      </div>
      <div className="column-2">
        <Education />
      </div>
    </div>
  </main>
);

export default Main;
