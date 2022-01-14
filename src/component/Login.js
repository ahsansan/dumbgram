import {useState} from "react";
import { Form, Button, Modal } from 'react-bootstrap';
import '../styles/components/auth.css'

// Register
import Register from './Register'

function Login(props) {

  const [show, setShow] = useState(props.isOpen);
  const handleClose = () => setShow(false);

  // Register
  const [showRegisterModal, setRegisterModal] = useState(false);
    const handleModalRegister = () => {
        setShow(!show);
        setRegisterModal(!showRegisterModal);
    }

  return (
    <>
    {/* Modal */}
    { showRegisterModal ? <Register isOpen={true} /> : null}
    <Modal dialogClassName="info-modal" show={show} onHide={handleClose}>
      <Modal.Body>
      <Modal.Title className="form-auth-h">Login</Modal.Title>
        <Form>
            <Form.Group>
              <Form.Control className="form-auth-input" type="email" id="email" placeholder="Email"/>
              <Form.Control className="form-auth-input" type="password" name="password" id="password" placeholder="Password"/>
              <Button className="form-auth-button">Login</Button>
              <span onClick={handleModalRegister} style={{ textDecoration: "none" }}><p className="form-auth-p">Don't have an account? Click Here</p></span>
              </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;