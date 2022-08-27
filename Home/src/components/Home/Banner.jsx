import axiosClient from "./api/axiosClient";
import React from "react";
import "./scss/Banner.scss";

export default function Banner() {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    axiosClient.get("Banner").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="Banner">
          <div className="Banner_item">
            <h3 className="Banner_title">{item.title}</h3>
            <p className="Banner_content">{item.description}</p>
            <button className="Banner_button">Learn More</button>
          </div>
          <div className="Banner_img">
            <img className="Banner_img_1" src={item.url} />
          </div>
        </div>
      ))}
    </div>
  );
}
