// Hook
import { useState } from "react";
// Bootstrap
import { Form, Button, Modal } from "react-bootstrap";
// Custom Css
import "../styles/components/auth.css";
// Import Component
import Register from "./Register";
// React Router Dom
import { Link } from "react-router-dom";

function Login(props) {
  const [show, setShow] = useState(props.isOpen);
  const handleLoginClose = () => setShow(false);

  // Register
  const [showRegisterModal, setRegisterModal] = useState(false);
  const handleModalRegister = () => {
    setShow(!show);
    setRegisterModal(!showRegisterModal);
  };

  return (
    <div>
      {/* Modal */}
      {showRegisterModal && <Register isOpen={true} />}
      <Modal dialogClassName="info-modal" show={show} onHide={handleLoginClose}>
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
            <Link to="/feed">
              <Button className="form-auth-button">Login</Button>
            </Link>
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
