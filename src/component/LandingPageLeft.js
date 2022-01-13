import Register from '../component/Register';
import Login from '../component/Login';

function LandingPageLeft() {
    return(
		<div>
            <h1 className="lp-dumbgram">DumbGram</h1>
            <h2>Share your best photos or videos</h2>
            <p>Join now, share your creations with another people and enjoy other creation.</p>
            <div className="lp-tombol">
                <div>
                    <Login/>
                </div>
                <div>
                    <Register/>
                </div>
            </div>
        </div>
    )
}

export default LandingPageLeft;