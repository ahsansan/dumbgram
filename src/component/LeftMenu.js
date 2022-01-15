// Custom Css
import '../styles/components/left-menu.css'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignInAlt, faHome, faCompass } from '@fortawesome/free-solid-svg-icons';

function LeftMenu() {

    const profiles = [{
        photo: "/images/photos/Lisa.png",
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
                <img src={process.env.PUBLIC_URL + '/images/DumbGramIcon.png'} alt="DumbGram" />
            </div>
            {profiles.map((profile, index) => (
            <div key={index}>
                <div className="left-menu-edit-container">
                    <a href="/edit-profile"><FontAwesomeIcon className="icon-notifikasi" icon={faEdit} /></a>
                </div>
                <div className="left-menu-up">
                <div>
                    <img src={process.env.PUBLIC_URL + `${profile.photo}`} alt="Profile" />
                </div>
                    <div>
                        <h2>{profile.name}</h2>
                        <p className="username">{profile.username}</p>
                    </div>
                    <div className="left-menu-statsprofile">
                        <div className="left-menu-count">
                            <p className="head">Post</p>
                            <p className="content">{profile.post}</p>
                        </div>
                        <div className="left-menu-count-center">
                            <p className="head">Followers</p>
                            <p className="content">{profile.followers}</p>
                        </div>
                        <div className="left-menu-count">
                            <p className="head">Following</p>
                            <p className="content">{profile.following}</p>
                        </div>
                    </div>
                </div>
                <div className="data-diri">
                    <p>{profile.bio}</p>
                </div>
                <div className="left-menu-down">
                <hr />
                    <ul>
                        <li><a href="/feed"><FontAwesomeIcon className="icon-notifikasi" icon={faHome} /> Home</a></li>
                        <li><a href="/explore"><FontAwesomeIcon className="icon-notifikasi" icon={faCompass} /> Explore</a></li>
                    </ul>
                </div>
                <div className="left-menu-down">
                <hr />
                <ul>
                    <li><a href="/"><FontAwesomeIcon className="icon-notifikasi" icon={faSignInAlt} /> Logout</a></li>
                </ul>
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}

export default LeftMenu;