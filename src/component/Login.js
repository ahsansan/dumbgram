import { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class Login extends Component {
  render() {
    const { state = {} } = location;
    const { modal } = state;
    return (
      <>
        <Modal className={modal ? "modal" : undefined} dialogClassName="info-modal">
          <Modal.Body>
          <Modal.Title className="form-auth-h">Login</Modal.Title>
            <Form>
                <Form.Group>
                    <Form.Control className="form-auth-input" type="email" id="email" placeholder="Email"/>
                    <Form.Control className="form-auth-input" type="password" name="password" id="password" placeholder="Password"/>
                    <Button className="form-auth-button">Login</Button>
                    <a href="/register" style={{ textDecoration: "none" }}><p className="form-auth-p">Don't have an account?</p></a>
                </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

// function Login({ location }) {

//   const { state = {} } = location;
//   const { modal } = state;
  
//     return (
//       <>
//         <Modal className={modal ? "modal" : undefined} dialogClassName="info-modal">
//           <Modal.Body>
//           <Modal.Title className="form-auth-h">Login</Modal.Title>
//             <Form>
//                 <Form.Group>
//                     <Form.Control className="form-auth-input" type="email" id="email" placeholder="Email"/>
//                     <Form.Control className="form-auth-input" type="password" name="password" id="password" placeholder="Password"/>
//                     <Button className="form-auth-button">Login</Button>
//                     <a href="/register" style={{ textDecoration: "none" }}><p className="form-auth-p">Don't have an account?</p></a>
//                 </Form.Group>
//             </Form>
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   }

export default Login;