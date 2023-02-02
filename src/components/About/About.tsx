import React, { FC } from "react";
import "./About.css";

const About: FC = () => {
  const message =
    "Hi, I'm a front-end engineer with 3+ years of development experience in Angular. Like to solve and challenge all kinds of things, and continue to improve";
  return (
    <div className="about">
      <div className="info-box">
        <h2 className="h2">about</h2>
        <div className="text-box">{message}</div>
      </div>
    </div>
  );
};

export default About;
