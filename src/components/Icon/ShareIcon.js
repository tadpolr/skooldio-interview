import React from 'react'
import PropTypes from 'prop-types'

import { COLOR } from '../../const'
import Icon from './Icon'

const ShareIcon = ({onClick}) => {
    return (
        <CustomIcon clickable onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="23px" viewBox="0 0 18 23">
                <path fill="#F3F3F3" d="M-427-468H941v775H-427z" opacity=".2"/>
                <g  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.577">
                    <path d="M9 16V1L5 4.175M9 16V1l4 3.175"/>
                    <path d="M13.55 10H17v12H1V10h3.45"/>
                </g>
            </svg>
        </CustomIcon>
    )
}

ShareIcon.propTypes = {
    onClick: PropTypes.func,
}

export default ShareIcon

const CustomIcon = Icon.extend`
    fill: transparent;
    stroke: ${COLOR.GREY};

    &:active {
        stroke: black;
    }
`