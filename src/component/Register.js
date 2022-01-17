// Hook
import { useState } from "react";
// Bootstrap
import { Form, Button, Modal } from "react-bootstrap";
// Custom CSS
import "../styles/components/auth.css";
// Import Component
import Login from "./Login";

function Register(props) {
  // register
  const [show, setShow] = useState(props.isOpen);
  const handleClose = () => setShow(false);

  // login
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginModal = () => {
    setShow(!show);
    setShowLogin(!showLogin);
  };

  // data
  const [state, setState] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  // ketika di input
  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // ketika tombol submit di tekan
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      {/* Modal */}
      {showLogin && <Login isOpen={true} />}
      <Modal dialogClassName="info-modal" show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Title className="form-auth-h">Register</Modal.Title>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Control
                className="form-auth-input"
                onChange={handleOnChange}
                value={state.email}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="false"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="form-auth-input"
                onChange={handleOnChange}
                value={state.name}
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="false"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="form-auth-input"
                onChange={handleOnChange}
                value={state.username}
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="false"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="form-auth-input"
                onChange={handleOnChange}
                value={state.password}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button className="form-auth-button" type="submit">
              Register
            </Button>
          </Form>
          <span onClick={handleLoginModal} style={{ textDecoration: "none" }}>
            <p className="form-auth-p">Already have an account? Click Here</p>
          </span>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Register;
