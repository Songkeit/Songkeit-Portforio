import React from "react";
import '../Social/SocialFollow.css'
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>

      <a href="https://www.facebook.com/songkeit.klinnimnaul.5/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/songkeit-klinnimnaul-317a14253/" 
      className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://github.com/Songkeit"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
</div>
  );
}