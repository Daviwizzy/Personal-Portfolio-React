import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Email from "@iconscout/react-unicons/icons/uil-envelope";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <div className="f-icons">
        <a href="mailto:davidakintunde433@gmail.com">
          <span ><Email color="white" size={"3rem"}/></span>
        </a>
          <a
            href="https://www.instagram.com/Daviwhizzy"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            <Insta color="white" size={"3rem"} />
          </a>

          <a
            href="https://www.facebook.com/daviwhizzy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/Daviwizzy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
