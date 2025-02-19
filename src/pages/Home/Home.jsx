import './Home.css'

//import dependencies
import { Link } from 'react-router-dom'

//import images
import together from '../../assets/together.png'

export default function Home () {
    return (
        <div className="home-root">
            <div className='home-main'>
                <div className='home-main-text'>
                    <h1>¡Te Apoyamos!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde minus fugit sapiente consequuntur id consectetur distinctio quod quibusdam fuga, officia accusantium nulla, voluptatem voluptas animi quis dolorum ex qui blanditiis?</p>
                    <Link to='/' ><div className='home-main-btn'>Contactanos</div></Link>
                </div>
                <div className='home-main-img'>
                    <img src={together} alt="" />
                </div>
            </div>
        </div>
    )
}