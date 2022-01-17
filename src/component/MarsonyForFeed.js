// Hooks
import { useState } from "react";

// Custom-Css
import "../styles/components/feed.css";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

// React Router Dom
import { Link } from "react-router-dom";

// Detail Feed
import DetailFeed from "../component/DetailFeed";

export default function MansoryForFeed(props) {
  // Detail Feed
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="masonry-style-feed">
      {props.imagesFeed.map((feed) => (
        <div key={feed.id}>
          <div className="feed-container">
            <div className="feed-gambar">
              <img
                className="images"
                onClick={handleShow}
                src={process.env.PUBLIC_URL + `${feed.image}`}
              />
            </div>
            <div className="feed-keterangan">
              <div className="prof-box">
                <div className="profile">
                  <img
                    src={process.env.PUBLIC_URL + `${feed.ppuploader}`}
                    className="card-profiles"
                    alt="pp"
                  />
                  <p className="post-name">
                    <Link to="/profile">{feed.uploader}</Link>
                  </p>
                </div>
                <div className="icon-container">
                  <FontAwesomeIcon className="card-icon" icon={faHeart} />
                  <FontAwesomeIcon className="card-icon" icon={faComment} />
                  <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                </div>
              </div>
            </div>
            <div className="navlike">
              <div>
                <p className="like-total">{feed.like}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <DetailFeed show={show} handleClose={handleClose} />
    </div>
  );
}
