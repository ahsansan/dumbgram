// Import Css
import "../styles/components/messagezayn.css";

function MessageZayn() {
  return (
    <div className="detail-dm-container">
      <div className="detail-dm-by-person">
        <div className="detail-dm-photo">
          <img
            className="detail-dm-circlement"
            src={process.env.PUBLIC_URL + "/images/photos/Zayn.png"}
          />
        </div>
        <div className="detail-dm-content">
          <p className="detail-dm-person-message">Halo Lisa</p>
        </div>
      </div>
      <div className="dm-reply">
        <textarea
          type="text"
          className="dm-textarea"
          placeholder="Send Messages"
        ></textarea>
      </div>
    </div>
  );
}

export default MessageZayn;
