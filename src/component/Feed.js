// Custom Css
import "../styles/components/feed.css";
// Mansory Elements
import MansoryForFeed from "./MarsonyForFeed";

function FeedMansory() {
  const imagesFeed = [
    {
      id: 1,
      image: "/images/photos/Rectangle 6.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "126.100 Like",
    },
    {
      id: 2,
      image: "/images/photos/Rectangle 3.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "156.100 Like",
    },
    {
      id: 3,
      image: "/images/photos/Rectangle 10.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "127.135 Like",
    },
    {
      id: 4,
      image: "/images/photos/Rectangle 5.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "128.135 Like",
    },
    {
      id: 5,
      image: "/images/photos/Rectangle 9.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "169.235 Like",
    },
    {
      id: 6,
      image: "/images/photos/Rectangle 8.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "199.235 Like",
    },
    {
      id: 7,
      image: "/images/photos/Rectangle 4.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "118.235 Like",
    },
    {
      id: 8,
      image: "/images/photos/Rectangle 12.png",
      uploader: "zayn",
      ppuploader: "/images/photos/Zayn.png",
      like: "118.235 Like",
    },
  ];

  return (
    <div>
      <div className="mansory-container">
        <MansoryForFeed imagesFeed={imagesFeed}></MansoryForFeed>
      </div>
    </div>
  );
}

export default FeedMansory;
