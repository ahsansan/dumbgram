// Bootstrap
import {
  Modal,
  Card,
  Col,
  Row,
  Form,
  Navbar,
  Container,
} from "react-bootstrap";
// Custom CSS
import "../styles/components/detailfeed.css";
// FonstAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

function DetailFeed(props) {
  const { show, handleClose } = props;

  return (
    <div>
      {/* modal detail feed */}
      <Modal
        show={show}
        onHide={handleClose}
        className="modalleft"
        dialogClassName="info-modal-feed"
      >
        <Modal.Body className="modallg">
          <Row>
            {/* feed gambar */}
            <Col className="gambarfeed">
              <Card style={{ width: "18rem" }} className="bgcard">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/photos/Detail.png"}
                  className="gambardetail"
                />
              </Card>
            </Col>
            {/* feed coment */}
            <Col lg={4}>
              <Card style={{ width: "17rem" }} className="cardcoment">
                <div className="circlement">
                  <a href="/profile">
                    <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + "/images/photos/Zayn.png"}
                      className="profilement mlprof"
                    />
                  </a>
                  <p className="nameprofilement">Zayn</p>
                </div>
                <p className="captioncoment">To Begin Again</p>
                <hr className="garis" />
                {/* Komen */}
                <div className="container-coment">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/images/photos/Lisa.png"}
                    className="profilement"
                  />
                  <p className="nameprofilement">Lisa</p>
                </div>
                <p className="captioncoment">Nice Place</p>
                <div className="container-coment">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/images/photos/Lisa.png"}
                    className="profilement"
                  />
                  <p className="nameprofilement">Lisa</p>
                </div>
                <p className="captioncoment">Good Vibe</p>
                <Form className="inputcoment">
                  <Navbar className="iconment">
                    <Container>
                      <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="icon3">
                          <FontAwesomeIcon
                            className="card-icon heart hearts"
                            icon={faHeart}
                            size="lg"
                          />
                          <FontAwesomeIcon
                            className="card-icon comment comments"
                            icon={faComment}
                            size="lg"
                          />
                          <FontAwesomeIcon
                            className="card-icon"
                            icon={faPaperPlane}
                            size="lg"
                          />
                        </Navbar.Text>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <Navbar>
                    <Container>
                      <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="likements">
                          <span>156.100 Like</span>
                        </Navbar.Text>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <Form.Control
                    className="form-controls inputcoment"
                    type="text"
                    placeholder="Comment"
                  />{" "}
                  <br />
                </Form>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailFeed;
