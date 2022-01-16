// Hook
import { useState } from "react";
// Bootstrap
import { Form, Button, Modal } from "react-bootstrap";
// Custom Css
import "../styles/components/auth.css";
// Import Component
import Register from "./Register";

function Login(props) {
  const [show, setShow] = useState(props.isOpen);
  const handleClose = () => setShow(false);

  // Register
  const [showRegisterModal, setRegisterModal] = useState(false);
  const handleModalRegister = () => {
    setShow(!show);
    setRegisterModal(!showRegisterModal);
  };

  return (
    <div>
      {/* Modal */}
      {showRegisterModal ? <Register isOpen={true} /> : null}
      <Modal dialogClassName="info-modal" show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Title className="form-auth-h">Login</Modal.Title>
          <Form>
            <Form.Group>
              <Form.Control
                className="form-auth-input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="form-auth-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </Form.Group>
            <a href="/feed">
              <Button className="form-auth-button">Login</Button>
            </a>
          </Form>
          <span
            onClick={handleModalRegister}
            style={{ textDecoration: "none" }}
          >
            <p className="form-auth-p">Don't have an account? Click Here</p>
          </span>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
