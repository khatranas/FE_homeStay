import React from "react";
import axiosClient from "./api/axiosClient";
import "./scss/Header.scss";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const { logo, button } = props;

  const [data, setData] = React.useState([]);

  const getApi = async () => {
    axiosClient.get("Header").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="Header conteiner">
      {/* logo */}
      <div className="Header_logo">{logo}</div>
      {/* menu */}
      <ul className="Header_menu">
        {data.map((item, index) => (
          <li key={index}>
            <NavLink to={item.url}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
      {/* button */}
      <button className="Header_button">{button}</button>
    </div>
  );
}
