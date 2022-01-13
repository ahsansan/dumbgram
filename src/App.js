import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './pages/LandingPage'
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <div>
      <Router>
      <LandingPage />
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
