import React from "react";
import "./scss/Box.scss";
import axiosClient from "./api/axiosClient";
export default function Box() {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    axiosClient.get("Demo").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="container__one">
      <div className="container__header">
        <h3 className="container__title2">How it works.</h3>
        <p className="container__p">This is how our products works</p>
        <div className="Container">
          {data.map((item, index) => (
            <div key={index} className="container__address ">
              <div className="address__item">
                <img
                  src={item.url}
                  alt=""
                  className="address__img address__img--size"
                />
                <h3 className="address_header">{item.title}</h3>
                <p className="address_content">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
