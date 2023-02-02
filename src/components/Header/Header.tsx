import React, { FC } from "react";
import "./Header.css";

const Header: FC = () => {
  const data = [
    { title: "name", value: "junan chen" },
    { title: "connect", value: "xxx" },
  ];

  const list = data.map(({ title, value }) => (
    <li>
      <div className="dt">{title}</div>
      <div className="dd">{value}</div>
    </li>
  ));

  return (
    <header className="sidebar">
      <ul className="sidebar-info-list">{list}</ul>
    </header>
  );
};

export default Header;
