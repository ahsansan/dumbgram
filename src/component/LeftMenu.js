function LeftMenu() {

    const profiles = [{
        name: "Lisa",
        username: "@lalalisa_m",
        post: "200",
        followers: "51.2M",
        following: "1",
        bio: "Rapper in Black Pink, Brand Ambasador Penshoppe."
    }];

    return (
        <div className="container">
            <div className="left-menu-container">
            <div>
                <h1 className="left-menu-dumbgram">DumbGram</h1>
            </div>
            {profiles.map((profile, index) => (
            <div>
                <div className="left-menu-edit-container">
                    <button><img src={process.env.PUBLIC_URL + '/images/edit.png'} alt="Edit Profile" /></button>
                </div>
                <div className="left-menu-up">
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/landingpage/Rectangle 4.png'} alt="Profile" />
                </div>
                    <div>
                        <h2>{profile.name}</h2>
                        <p className="username">{profile.username}</p>
                    </div>
                    <div className="left-menu-statsprofile">
                        <div className="left-menu-count">
                            <div className="left-menu-vlright">
                            <p className="head">Post</p>
                            <p className="content">{profile.post}</p>
                            </div>
                        </div>
                        <div className="left-menu-count">
                            <div className="left-menu-vldouble">
                            <p className="head">Followers</p>
                            <p className="content">{profile.followers}</p>
                            </div>
                        </div>
                        <div className="left-menu-count">
                            <div className="left-menu-vlleft">
                            <p className="head">Following</p>
                            <p className="content">{profile.following}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-diri">
                    <p>{profile.bio}</p>
                </div>
                <div className="left-menu-down">
                <hr />
                    <ul>
                        <li><a href="/"><img src={process.env.PUBLIC_URL + '/images/home.png'} alt="Home" /> Home</a></li>
                        <li><a href="/explore"><img src={process.env.PUBLIC_URL + '/images/explore.png'} alt="Explore" /> Explore</a></li>
                    </ul>
                </div>
                <div className="left-menu-down">
                <hr />
                <ul>
                    <li><a href="/logout"><img src={process.env.PUBLIC_URL + '/images/logout.png'} alt="Logout" /> Logout</a></li>
                </ul>
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}

export default LeftMenu;