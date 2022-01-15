import LeftMenu from '../component/LeftMenu';
import Header from '../component/Header';
import EditProfile from '../component/EditProfile';

function EditProfilePage() {
    return(
        <div className='nav-container'>
            <div className='home-left'>
                <LeftMenu/>
            </div>
            <div className='home-right'>
                <div>
                    <Header/>
                </div>
                <div className='d-flex justify-content-center'>
                    <EditProfile/>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage;