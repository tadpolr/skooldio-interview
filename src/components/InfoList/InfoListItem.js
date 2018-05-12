import React from 'react'
import PropTypes from 'prop-types'

import { COLOR } from '../../const'
import Flex from '../base/Flex'
import Text from '../base/Text'

const InfoListItem = ({label, value}) => {
    return (
        <Flex col alignCenter fullWidth>
            <Text large color={COLOR.GREY}>{value}</Text>
            <Text small light color={COLOR.GREY} size="18.4px">{label}</Text>
        </Flex>
    )
}

InfoListItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
}

export default InfoListItem