// Import CSS
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Page
import LandingPage from './pages/LandingPage'
import ExplorePage from './pages/ExplorePage'
import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage'
import Feed from './component/Feed'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* landing page */}
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/feed" element={<FeedPage/>} />
          <Route exact path="/explore" element={<ExplorePage/>} />
          <Route exact path="/profile" element={<ProfilePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
