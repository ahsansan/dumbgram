// Custom Css
import "../styles/components/profile.css";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faHome,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

function LeftMenu() {
  const profiles = [
    {
      photo: "/images/photos/Zayn.png",
      name: "Zayn Malik",
      username: "@zayn",
      post: "143",
      followers: "40.5M",
      following: "25",
      bio: "Nobody is Listening Out Now! www.inzayn.com",
    },
  ];

  return (
    <div className="container">
      <div className="left-menu-container">
        {profiles.map((profile, index) => (
          <div key={index}>
            <div className="left-menu-up">
              <div>
                <img
                  src={process.env.PUBLIC_URL + `${profile.photo}`}
                  alt="Profile"
                />
              </div>
              <div>
                <h2>{profile.name}</h2>
                <p className="username">{profile.username}</p>
              </div>
              <div className="tombol-action">
                <ul>
                  <li>
                    <a href="/message-detail" className="login-messeges-button">
                      Messeges
                    </a>
                  </li>
                  <li>
                    <a href="/" className="login-unfollow-button">
                      Unfollow
                    </a>
                  </li>
                </ul>
              </div>
              <div className="left-menu-statsprofile">
                <div className="left-menu-count">
                  <p className="head">Post</p>
                  <p className="content">{profile.post}</p>
                </div>
                <div className="left-menu-count-center">
                  <p className="head">Followers</p>
                  <p className="content">{profile.followers}</p>
                </div>
                <div className="left-menu-count">
                  <p className="head">Following</p>
                  <p className="content">{profile.following}</p>
                </div>
              </div>
            </div>
            <div className="data-diri">
              <p>{profile.bio}</p>
            </div>
            <div className="left-menu-down">
              <hr />
              <ul>
                <li>
                  <a href="/feed">
                    <FontAwesomeIcon
                      className="icon-notifikasi"
                      icon={faHome}
                    />{" "}
                    Home
                  </a>
                </li>
                <li>
                  <a href="/explore">
                    <FontAwesomeIcon
                      className="icon-notifikasi"
                      icon={faCompass}
                    />{" "}
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className="left-menu-down">
              <hr />
              <ul>
                <li>
                  <a href="/">
                    <FontAwesomeIcon
                      className="icon-notifikasi"
                      icon={faSignInAlt}
                    />{" "}
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftMenu;
