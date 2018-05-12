import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

const TriangleIcon = ({down}) => {
    return (
        <CustomIcon down={down} >
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 9 14">
                <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                    <polygon id="Triangle" points="9 7 0 14 0 0"></polygon>
                </g>
            </svg>
        </CustomIcon>
    )
}

export default TriangleIcon

TriangleIcon.propTypes = {
    down: PropTypes.bool,
}


const CustomIcon = Icon.extend`
    transform: ${props => props.down ? 'rotate(90deg)' : 'unset'};
    transform-origin: center;
`