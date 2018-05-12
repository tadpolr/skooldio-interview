import React from 'react'
import PropTypes from 'prop-types'

import Flex from '../base/Flex'
import RoundItem from './RoundItem'
import Text from '../base/Text'

const Round = ({data}) => {
    return (
        <Flex row alignCenter>
            <Text large light margin="0 1.5rem 0 0">รอบที่เปิด</Text>
            { data.map( (e, index) => {
                return <RoundItem key={index} index={e.index} active={e.active} />
            })}
        </Flex>
    )
}

Round.propTypes = {
    data: PropTypes.array,
}

export default Round