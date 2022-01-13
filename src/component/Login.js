import {useState} from "react";
import { Form, Button, Modal } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="login-auth-button" onClick={handleShow}>
        Login
      </Button>

      <Modal dialogClassName="info-modal" show={show} onHide={handleClose}>
        <Modal.Body>
        <Modal.Title className="form-auth-h">Login</Modal.Title>
          <Form>
              <Form.Group>
                  <Form.Control className="form-auth-input" type="email" id="email" placeholder="Email"/>
                  <Form.Control className="form-auth-input" type="password" name="password" id="password" placeholder="Password"/>
                  <Button className="form-auth-button">Login</Button>
                  <a href="/register" style={{ textDecoration: "none" }}><p className="form-auth-p">Don't have an account? Click Here</p></a>
              </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;