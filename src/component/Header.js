// Custom Css
import '../styles/components/header.css'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPaperPlane, faBell } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <input type="text" className="form-search-input" placeholder='&#xF002; 𝗦𝗲𝗮𝗿𝗰𝗵'/>
            </div>
            <div className="nav-right">
               <div className="nav-right-menu">
                    <ul>
                        <li><a href="/notification"><FontAwesomeIcon className="icon-notifikasi" icon={faBell}/></a></li>
                        <li><a href="/messege"><FontAwesomeIcon className="icon-notifikasi" icon={faPaperPlane}/></a></li>
                    </ul>
                    <ul>
                        <li><a className="create-post" href="/create-post"><span className="plusquar"><span><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span></span>  &nbsp; <span> Create Post</span></a></li>
                    </ul>
               </div>
            </div>
        </div>
    )
}

export default Header;