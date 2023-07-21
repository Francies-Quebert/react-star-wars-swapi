import { Link } from 'react-router-dom';
import Img from '../assets/images/darthVader.png'
import { useGetListQuery } from '../slice/listSlice';

function Home() {
    useGetListQuery({ page: 1, type: 'people' }, { refetchOnFocus: false })

    return (
        <div className='home-page'>
            <div className='home'>
                <div className='home__sh'>
                    <div className='home__sh-cont'>
                        <h3 className='home__sh-cont-welcome'>WELCOME!</h3>

                        <h1 className='home__sh-cont-dark_side'>Join the dark side</h1>

                        <p className='home__sh-cont-desc'>I am your father. Search your feelings, you know it to be true! Join me, and together we can rule the galaxy as father and son. It is the only way.</p>

                        <div className='home__sh-cont-btn'>
                            <Link to='/star-war' className='btn btn-primary'>START HERE!</Link>
                        </div>
                    </div>
                </div>
                <div className='home__img_container'>
                    <img src={Img} alt='darthVader' className='home__img_container-img' />
                </div>
            </div>
        </div>
    )
}

export default Home