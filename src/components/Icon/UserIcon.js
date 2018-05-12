import React from 'react'

import { COLOR } from '../../const'
import Icon from './Icon'

const UserIcon = () => {
    return (
        <CustomIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 8 8">
                <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                    <path d="M8,5.93551965 L8,8 L0,8 L0,5.93551965 C1.20495897,5.3367061 2.56315852,5 4,5 C5.43684148,5 6.79504103,5.3367061 8,5.93551965 Z M4,4 C2.8954305,4 2,3.1045695 2,2 C2,0.8954305 2.8954305,0 4,0 C5.1045695,0 6,0.8954305 6,2 C6,3.1045695 5.1045695,4 4,4 Z" id="Combined-Shape"></path>
                </g>
            </svg>
        </CustomIcon>
    )
}

export default UserIcon

const CustomIcon = Icon.extend`
    fill: ${COLOR.LIGHT_GREY};
`