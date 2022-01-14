import {useState} from "react";
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../styles/components/auth.css'
import Login from './Login'

function Register(props) {
  // register
  const [show, setShow] = useState(props.isOpen);
  const handleClose = () => setShow(false);

  // login
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginModal = () => {
        setShow(!show);
        setShowLogin(!showLogin);
    }

  // menyimpan
  const [product, setProduct] = useState({
        email: '',
        name: '',
        username: '',
        password: ''
    })

  // values inputan
  const { email, name, username, password } = product;

  // ketik
  const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
  
  // ketika tombol submit di tekan
  const handleOnSubmit = (e) => {
  
  // validasi tidak ke url
  e.preventDefault();

  console.log(product);

  // kosongkan data
    setProduct({
        email: '',
        name: '',
        username: '',
        password: ''
    })
}
  
    return (
      <>
      {/* Modal */}
      { showLogin ? <Login isOpen={true} /> : null}
        <Modal dialogClassName="info-modal" show={show} onHide={handleClose}>
          <Modal.Body>
          <Modal.Title className="form-auth-h">Register</Modal.Title>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control className="form-auth-input" type="email" id="email" placeholder="Email" onChange={handleOnChange} value={email} required/>
                    <Form.Control className="form-auth-input" type="text" id="name" placeholder="Name" onChange={handleOnChange} value={name} required/>
                    <Form.Control className="form-auth-input" type="text" id="username" placeholder="Username" onChange={handleOnChange} value={username} required/>
                    <Form.Control className="form-auth-input" type="password" name="password" id="password" placeholder="Password" onChange={handleOnChange} value={password} required/>
                    <Button className="form-auth-button">Register</Button>
                    <span onClick={handleLoginModal} style={{ textDecoration: "none" }}><p className="form-auth-p">Already have an account? Click Here</p></span>
                </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default Register;