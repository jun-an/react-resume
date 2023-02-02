import React, { FC } from "react";
import "./Experience.css";

const Experience: FC = () => {
  const data = [
    {
      title: "Tradebeyond",
      street: "Taipei City, Nangang District",
      duration: "2020-07 - PRESENT",
      subTitle: [
        "develop a B2B transaction matching platform",
        "work with UI/UX engineers to complete front-end web screens",
        "design front-end architecture and write business logic",
        "work with backends and concatenate RESTful APIs",
        "code review & design review",
        "optimize and enhance the functionality and performance of existing software",
        "writing specification documents for software design",
      ],
    },
    {
      title: "MetaAge",
      street: "Taipei City, Neihu District",
      duration: "2019-03 - 2020-04",
      subTitle: [
        "develop the company's internal order trading system",
        "responsible for front-end web page cutting (RWD), business logic, program architecture",
        "work with backends and concatenate RESTful APIs",
        "bug fix, refactor legacy code",
      ],
    },
    {
      title: "迪智國際有限公司",
      street: "Taoyuan City, Zhongli District",
      duration: "2017-07 - 2017-09",
      subTitle: [
        "develop government web pages",
        "responsible for front-end web page cutting (RWD), business logic, program architecture",
        "use mssql to get the data required by the front end",
      ],
    },
  ];

  const subList = (subDataList: string[]) =>
    subDataList.map((value) => <li>{value}</li>);

  const list = data.map(({ title, street, subTitle, duration }) => (
    <li>
      <h3 className="h3">
        <strong>{title}</strong> / {street}
      </h3>
      <div className="year absolute">{duration}</div>
      <ul className="bullet-list">{subList(subTitle)}</ul>
    </li>
  ));

  return (
    <div className="info-box">
      <h2 className="h2">experience</h2>
      <ul className="timeline-list">{list}</ul>
    </div>
  );
};

export default Experience;
