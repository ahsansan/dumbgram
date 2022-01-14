import LeftMenu from '../component/LeftMenu';
import Header from '../component/Header';
import Explore from '../component/Explore';

function ExplorePage() {
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
                    <Explore/>
                </div>
            </div>
        </div>
    )
}

export default ExplorePage;