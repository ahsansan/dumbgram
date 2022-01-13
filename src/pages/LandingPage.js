import LandingPageLeft from '../component/LandingPageLeft';
import LandingPageRight from '../component/LandingPageRight';

function LandingPage() {
    return(
        <div className="lp-bg">
            <div className="lp-container">
                <div className="lp-left">
                <LandingPageLeft/>
                </div>
                <div className="lp-right">
                <LandingPageRight/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;