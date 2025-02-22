import './Contacto.css'

//import images
import together from '../../assets/together.png'

export default function Contacto () {
    return (
        <div className='contacto-root'>
            <div className='contacto-main'>
                <div className='contacto-main-img' >
                    <img src={together} alt="" />
                </div>
                <div className='contacto-main-text' >
                    <h2>Contactanos</h2>
                    <p>
                        Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. Estamos aquí <br />
                        <strong>Telefono:</strong> +57 333 000 0000 <br />
                        <strong>Correo:</strong> contacto@empresa.com <br />
                        <strong>Horario:</strong> Lunes a Viernes de 8:00 am a 5:00 pm <br />
                    </p>
                </div>
            </div>
        </div>
    )
}