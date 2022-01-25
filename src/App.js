// Import CSS
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Page
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePostPage from "./pages/CreatePostPage";
import EditProfilePage from "./pages/EditProfilePage";
import NoMessagePage from "./pages/NoMessagePage";
import MessageZaynPage from "./pages/MessagesZaynPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* landing page */}
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/feed" element={<FeedPage />} />
          <Route exact path="/explore" element={<ExplorePage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/create-post" element={<CreatePostPage />} />
          <Route exact path="/edit-profile" element={<EditProfilePage />} />
          <Route exact path="/message" element={<NoMessagePage />} />
          <Route exact path="/message-detail" element={<MessageZaynPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
