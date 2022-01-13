import Register from '../component/Register';
import { Link } from 'react-router-dom'

function LandingPageLeft() {
    return(
		<div>
            <h1 className="lp-dumbgram">DumbGram</h1>
            <h2>Share your best photos or videos</h2>
            <p>Join now, share your creations with another people and enjoy other creation.</p>
            <div className="lp-tombol">
                <div>
                <Link to={{pathname: "/login", state: { modal: true }, }} className="login-auth-button">Login</Link>
                </div>
                <div>
                    <Register/>
                </div>
            </div>
        </div>
    )
}

export default LandingPageLeft;