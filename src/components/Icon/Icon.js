import styled from 'styled-components'
import PropTypes from 'prop-types'

const Icon = styled.span`
    cursor: ${props => props.clickable ? 'pointer' : 'inherit'};
    color: inherit;
    line-height: 0.5;
`

Icon.propTypes = {
    clickable: PropTypes.bool,
}

export default Icon