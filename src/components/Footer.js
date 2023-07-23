import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Columbus,</p>
            <p>Indiana</p>
          </div>

          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>1-812-657-0103</p>
          </div>

          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p> megalakraj15@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <p>To know more about me,</p>
          <p>Feel free to contact in any of these social media forums</p>
          <div className="social">
            <Link
              to="https://www.facebook.com/megha.krishna.10"
              target="_blank"
            >
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/megala-k-a50278284"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>

            <Link to="https://www.instagram.com/megha_krishna/" target="_blank">
              {" "}
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
