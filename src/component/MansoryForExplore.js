// Custom Css
import "../styles/components/explore.css";

export default function MansoryForExplore(props) {
  return (
    <div className="masonry-style-exp">
      {props.imageUrls.map((img, index) => (
        <img
          src={process.env.PUBLIC_URL + `${img}`}
          key={index}
          className="images-explore"
          alt="Gambar Explore"
        />
      ))}
    </div>
  );
}
