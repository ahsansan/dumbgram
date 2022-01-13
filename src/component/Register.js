import {useState} from "react";
import { Form, Button, Modal } from 'react-bootstrap';

function Register() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="register-auth-button" onClick={handleShow}>
          Register
        </Button>

        <Modal dialogClassName="info-modal" show={show} onHide={handleClose}>
          <Modal.Body>
          <Modal.Title className="form-auth-h">Register</Modal.Title>
            <Form>
                <Form.Group>
                    <Form.Control className="form-auth-input" type="email" id="email" placeholder="Email"/>
                    <Form.Control className="form-auth-input" type="text" id="name" placeholder="Name"/>
                    <Form.Control className="form-auth-input" type="text" id="username" placeholder="Username"/>
                    <Form.Control className="form-auth-input" type="password" name="password" id="password" placeholder="Password"/>
                    <Button className="form-auth-button">Register</Button>
                    <a href="/login" style={{ textDecoration: "none" }}><p className="form-auth-p">Already have an account? Click Here</p></a>
                </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default Register;