import React from "react";
import "./scss/Choose.scss";
import Hinh0 from "../../assets/img/hinh0.png";
import Vector2 from "../../assets/img/vector2.png";
import axiosClient from "./api/axiosClient";
export default function Choose() {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    axiosClient.get("Benefit").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <div className="choose">
        <div className="choose_container">
          <h3 className="choose_container_header ">
            Why you should choose us.
          </h3>
          <p className="choose_container_content ">
            Creating quality urban lifestyles,building stronger communities
          </p>
          <div className="choose_container_list">
            <ul className="choose_container_list_1">
              <li>
                <img className="choose_container_list_1_img" src={Vector2} />
                World className
              </li>
              <li>
                <img className="choose_container_list_1_img" src={Vector2} />
                Trusted
              </li>
            </ul>
            <ul className="choose_container_list_2">
              <li>
                <img className="choose_container_list_1_img" src={Vector2} />
                Affordable
              </li>
              <li>
                <img className="choose_container_list_1_img" src={Vector2} />
                Amenities
              </li>
            </ul>
          </div>
          <div className="choose_container_checkbox "></div>
        </div>
        <div className="choose_img">
          <img className="choose_img_1" src={Hinh0} alt="" />
        </div>
      </div>
    </div>
  );
}


// {
  /* <div classNameName="Choose">
        <div classNameName="Choose_img">
          <img classNameName="Choose_img_1" src={Hinh0} />
        </div>
        <div classNameName="Choose_header">
          <h3 classNameName="Choose_header_h3">Why you should choose us. </h3>
          <p classNameName="Choose_header_p">
            Creating quality urban lifestyles,building stronger communities
          </p>
        </div>
        <div classNameName="Choose_list">
          {data.map((e, i) => (
            <div key={i} classNameName="Choose_list_testimonials">
              <ul classNameName="Choose_list_testimonials_title">
                <li classNameName="Choose_list_testimonials_title_small">
                  <img
                    classNameName="Choose_list_testimonials_title_img"
                    src={Vector2}
                  />
                  {e.titleSmall}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div> */
// }
