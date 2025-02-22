import './Header.css'

//import image
import logo from '../assets/LOGO_TE_APOYAMOS.png'

//import dependencies
import { Link } from 'react-router-dom'

export default function Header () {
    return (
        <header className='header-root'>
            <div className='header-logo'>
                <Link to='/' >
                    <img src={logo} alt="Te Apoyamos R&Q" />
                </Link>
            </div>
            <nav className='header-links'>
                <Link to='/'>Inicio</Link>
                <Link to='/nosotros'>Nosotros</Link>
                <Link to='/aliados'>Aliados</Link>
                <Link to='/contacto'>Contacto</Link>
            </nav>
        </header>
    )
}