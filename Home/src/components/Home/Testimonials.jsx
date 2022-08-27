import React from "react";
import "./scss/Testimonials.scss";
import axiosClient from "./api/axiosClient";
export default function Testimonials() {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    axiosClient.get("DescribeInWord").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <div className="content-question">
        <div className="section-question">
          <h3 className="section__heading">Testimonials.</h3>
          <p className="section__sub-heading">
            This is what our client are saying
          </p>
        </div>
        <div className="header__navbar-btn2">
          <button className="btn2 btn2--success">View more</button>
        </div>
        <div className="row content-testimonials">
          {data.map((e, i) => (
            <div key={i} className="testimonials-list">
              <h3 className="testimonials-heading">{e.title}</h3>
              <p className="testimonials-sub-heading">{e.titleSmall}</p>
              <p className="testimonials-desc">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
