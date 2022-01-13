function LandingPageRight() {
    return(
		<div>
            <div className="lp-galeri">
                <div className="galerikiri">
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 6.png'}/>
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 5.png'}/>
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 10.png'}/>
                </div>
                <div className="galeritengah">
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 3.png'}/>
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 9.png'}/>
                </div>
                <div className="galerikanan">
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 4.png'}/>
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 8.png'}/>
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 12.png'}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPageRight;