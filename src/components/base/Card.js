import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.div.attrs({
    margin: props => props.margin || '0'
})`
    max-width: 442px;
    width: 100%;
    padding: 1.25rem;
    margin: ${props => props.margin};
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
`

Card.propTypes = {
    margin: PropTypes.string,
}

export default Card