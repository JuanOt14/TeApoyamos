import './aliadoItem.css'

//import dependencies
import PropTypes from 'prop-types'

//import default image
import defaultImage from '../assets/default.png'

export default function AliadoItem ({name, image, url}) {
    return (
        <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
            <article className='aliadoItem-body'>
                <div className='aliadoItem-icon'>
                    <img src={image} alt={name} onError={(e) => e.target.src = defaultImage} />
                </div>
                <h2>{name}</h2>
            </article>
        </a>
    )
}

AliadoItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string
}