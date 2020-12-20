import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <img
          className="footer__logo"
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          alt=""
        />
        <select className="footer__selector" name="" id="">
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Hindi">Hingi</option>
          <option value="Espanol">Espanol</option>
        </select>
        <select className="footer__selector" name="" id="">
          <option value="$U.S Dollar">$ U.S Dollar</option>
          <option value="Indian Rupee">Indian Rupee</option>
          <option value="Euro">Euro</option>
          <option value="Pound">Pound</option>
        </select>
        <select className="footer__selector" name="" id="">
          <option value="United States">Unites States</option>
          <option value="India">India</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
        </select>
      </div>
      <div className="footerBottom">
        <p>© Amazon clone . No rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
