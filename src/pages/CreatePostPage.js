import LeftMenu from '../component/LeftMenu';
import Header from '../component/Header';
import CreatePost from '../component/CreatePost';

function CreatePostPage() {
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
                    <CreatePost/>
                </div>
            </div>
        </div>
    )
}

export default CreatePostPage;