import React from "react";
import "./scss/Footer.scss";

export default function Footer() {
  return (
    <div>
      <div className=" footer ">
        <div className="footer__container ">
          <div className="footer__content ">
            <h3 className="footer__container-header ">Dee's Estate</h3>
            <p className="footer__text-one-size ">
              Solution for easy and flexible house hunting. You ca trust us
              anywhere through this platform
            </p>
          </div>
          <div className="footer__content ">
            <h3 className="footer__container-one ">Property</h3>
            <p className="footer__text ">Learning Modules</p>
            <p className="footer__text ">partnership</p>
            <p className="footer__text ">Watch demo</p>
            <p className="footer__text ">Event</p>
          </div>
          <div className="footer__content ">
            <h3 className="footer__container-one ">About</h3>
            <p className="footer__text ">Our Company</p>
            <p className="footer__text ">Career</p>
            <p className="footer__text ">Investors Relations</p>
            <p className="footer__text ">Social Impact</p>
          </div>
          <div className="footer__content ">
            <h3 className="footer__container-one ">Resources</h3>
            <p className="footer__text ">Contact</p>
            <p className="footer__text ">Give feedback</p>
            <p className="footer__text ">System status</p>
            <p className="footer__text ">privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
