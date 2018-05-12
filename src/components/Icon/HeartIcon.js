import React from 'react'
import PropTypes from 'prop-types'

import { COLOR } from '../../const'
import Icon from './Icon'

const HeartIcon = ({isFavorite, onClick}) => {
    return (
        <CustomIcon clickable isFavorite={isFavorite} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="21px" viewBox="0 0 24 21">
                <path strokeWidth="1.28" d="M6.255 1c-.447 0-.894.056-1.325.17a5.31 5.31 0 0 0-3.368 2.773C.753 5.606.82 7.76 1.745 9.855c.856 1.939 2.341 3.878 4.416 5.764a31.782 31.782 0 0 0 2.968 2.397c.067.047.187.137.345.255.48.36 1.827 1.367 2.526 1.729.7-.362 2.047-1.37 2.526-1.729.158-.118.278-.208.345-.255a31.745 31.745 0 0 0 2.968-2.397c2.075-1.886 3.56-3.825 4.416-5.764.925-2.094.992-4.249.183-5.912A5.31 5.31 0 0 0 19.07 1.17a5.349 5.349 0 0 0-4.133.62 54.45 54.45 0 0 0-2.448 2.023L12 4.26l-.49-.447c-.6-.55-2.241-1.88-2.447-2.024A5.347 5.347 0 0 0 6.255 1z"/>
            </svg>
        </CustomIcon>
    )
}

HeartIcon.propTypes = {
    isFavorite: PropTypes.bool,
    onClick: PropTypes.func,
}

export default HeartIcon

const CustomIcon = Icon.extend`
    fill: ${props => props.isFavorite ? COLOR.GRAPEFRUIT : COLOR.LIGHT_GREY};

    > svg {
        &:active {
            fill: ${props => props.isFavorite ? COLOR.DARK_GRAPEFRUIT : COLOR.GREY}
        }
    }
`