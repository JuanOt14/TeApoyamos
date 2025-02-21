import './serviceCard.css'

//import dependencies
import PropTypes from 'prop-types'

export default function ServiceCard ({title, description}) {
    return(
        <article className='serviceCard-body'>
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}