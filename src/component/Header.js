// Hook
import { useState } from "react";

// Custom Css
import "../styles/components/header.css";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPaperPlane,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

// Notification
import Notification from "./Notification";

function Header() {
  return (
    <div className="nav-container">
      <div className="nav-head">
        <a href="/feed">
          <img
            src={process.env.PUBLIC_URL + "/images/DumbGramIcon.png"}
            alt="DumbGram"
          />
        </a>
      </div>
      <div className="nav-left">
        <input
          type="text"
          className="form-search-input"
          placeholder="&#xF002; 𝗦𝗲𝗮𝗿𝗰𝗵"
        />
      </div>
      <div className="nav-right">
        <div className="nav-right-menu">
          <ul>
            <li>
              <Notification />
            </li>
            <li>
              <a href="/message">
                <FontAwesomeIcon
                  className="icon-notifikasi"
                  icon={faPaperPlane}
                />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="create-post" href="/create-post">
                <span className="plusquar">
                  <span>
                    <FontAwesomeIcon className="icon-plus" icon={faPlus} />
                  </span>
                </span>{" "}
                &nbsp; <span> Create Post</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
