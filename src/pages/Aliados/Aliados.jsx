import './Aliados.css'

//import data
import aliadosData from '../../data/aliados.json'

//import components
import AliadoItem from './components/aliadoItem'

export default function Aliados () {
    return (
        <div className='aliados-root'>
            <div className='aliados-main' >
                <h1>Nuestros aliados</h1>
                <div className='aliados-content'>
                    {
                        aliadosData.map((aliado, index) => (
                            <AliadoItem key={index} name={aliado.name} image={aliado.image} url={aliado.url} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}