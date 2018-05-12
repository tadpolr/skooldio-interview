import styled from 'styled-components'
import PropTypes from 'prop-types'

import { COLOR } from '../../const'

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${COLOR.LIGHTER_GREY};
    margin: ${props => props.noMargin ? '0' : '1rem 0'};
`

Divider.propTypes = {
    noMargin: PropTypes.bool,
}

export default Divider