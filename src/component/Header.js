import '../styles/components/header.css'

function Header() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <input type="text" className="form-search-input" placeholder="Search" />
            </div>
            <div className="nav-right">
               <div className="nav-right-menu">
                    <ul>
                        <li><a href="/notification"><img src={process.env.PUBLIC_URL + '/images/notification.png'} alt="Notification" /></a></li>
                        <li><a href="/messege"><img src={process.env.PUBLIC_URL + '/images/messeges.png'} alt="Messeges" /></a></li>
                    </ul>
                    <ul>
                        <li><a className="create-post" href="/create-post"><img src={process.env.PUBLIC_URL + '/images/createpost.png'} alt="Create Post" /> Create Post</a></li>
                    </ul>
               </div>
            </div>
        </div>
    )
}

export default Header;