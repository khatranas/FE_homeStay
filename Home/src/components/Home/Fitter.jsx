import React from "react";
import "./scss/Fitter.scss";
import Vector1 from "../../assets/img/vector1.png";
import axiosClient from "./api/axiosClient";
export default function Fitter() {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    axiosClient.get("Filter").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="Footer">
      {data.map((item, index) => (
        <div key={index} className="Footer_content_container">
          <ul className="Footer_content_container_list">
            <li className="Footer_content_container_list_title">
              {item.tilte}
              <img src={Vector1} />
            </li>
            <li className="Footer_content_container_list_dis">
              {item.description}
            </li>
          </ul>
        </div>
      ))}
      <div className="Footer_content">
        <div className="Footer_content_btn">
          <button className="Footer_content_btn_1">Search</button>
        </div>
      </div>
    </div>
  );
}
