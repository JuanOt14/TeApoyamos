import './Nosotros.css'

//import images
import together from '../../assets/together.png'

export default function Nosotros () {
    return (
        <div className='nosotros-root'>
            <div className='nosotros-main'>
                <div className='nosotros-main-content'>
                    <div className='nosotros-main-img' >
                        <img src={together} alt="" />
                    </div>
                    <div className='nosotros-main-text' >
                        <h1>Sobre Nosotros</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde minus fugit sapiente consequuntur id consectetur distinctio quod quibusdam fuga, officia accusantium nulla, voluptatem voluptas animi quis dolorum ex qui blanditiis?</p>
                        <h2>¿Por qué trabajar con nosotros?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iusto necessitatibus, repudiandae, ducimus unde illum itaque provident dolorum libero nihil esse nostrum reiciendis cumque dolorem, voluptas voluptatibus animi quisquam numquam?</p>
                    </div>
                </div>
                <div className='nosotros-body'>
                    <div className='nosotros-body-item'>
                        <h2>Misión</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eum a, illo ratione fugit sequi porro minus asperiores nisi sunt, magnam numquam. Amet vero eum eius blanditiis obcaecati harum natus.</p>
                    </div>
                    <div className='nosotros-body-item'>
                        <h2>Visión</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eum a, illo ratione fugit sequi porro minus asperiores nisi sunt, magnam numquam. Amet vero eum eius blanditiis obcaecati harum natus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}