import './Home.css'

//import dependencies
import { Link } from 'react-router-dom'

//import components
import ServiceCard from './components/serviceCard'

//import data
import serviceData from '../../data/services.json'

//import images
import together from '../../assets/together.png'

export default function Home () {
    return (
        <div className="home-root">
            <section className='home-main' >
                <div className='home-main-text' >
                    <h1>¡Te Apoyamos!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde minus fugit sapiente consequuntur id consectetur distinctio quod quibusdam fuga, officia accusantium nulla, voluptatem voluptas animi quis dolorum ex qui blanditiis?</p>
                    <Link to='/' ><div className='home-main-btn' >Contactanos</div></Link>
                </div>
                <div className='home-main-img' >
                    <img src={together} alt="" />
                </div>
            </section>
            <section className='home-services' >
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos una amplia gama de servicios adaptados a tus necesidades. Desde consultoría hasta desarrollo personalizado, estamos aquí para ayudarte.</p>
                <div className='home-services-items'>
                    {
                        serviceData.map((item, index) => (
                            <ServiceCard key={index} title={item.title} description={item.description} />
                        ))
                    }
                </div>
            </section>
            <section className='home-contact' >
                <h2>Contacto</h2>
                <p>¿Tienes preguntas o deseas más información? Contáctenos:</p>
                <p>Email: contacto@empresa.com | Teléfono: +123 456 789</p>
            </section>
        </div>
    )
}