import React from "react";
import "./scss/Featured.scss";
import axiosClient from "./api/axiosClient";
export default function Featured() {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    axiosClient.get("Model").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <div className="Featured">
        <h3 className="Featured_title">Our Featured Properties. </h3>
        <p className="Featured_content">
          One of our biggest product to be featured and that has sold out the
          most.
        </p>
        <div className="Featured_button">
          <button>View more</button>
        </div>
        <div className="Featured_item">
          {data.map((e, i) => (
            <div className="Featured_item-block" key={i}>
              <img src={e.url} alt="" />
              <div className="Featured_item-block_header">
                <h4>{e.title}</h4>
                <p>{e.name}</p>
              </div>
              <div className="Featured_item-block_bottom">
                <p>{e.description}</p>
                <p>{e.money}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
