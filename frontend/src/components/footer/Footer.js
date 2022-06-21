import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>NAKAMA</h6>
            <p className="text-justify"></p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li>
                <a href="/">C</a>
              </li>
              <li>
                <a href="/">UI Design</a>
              </li>
              <li>
                <a href="/">Java Script</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/category">Categories</a>
              </li>
              <li>
                <a href="/about-us">AboutUs</a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">@NAKAMA INC 2022</p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <a>Follow Us</a>
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
