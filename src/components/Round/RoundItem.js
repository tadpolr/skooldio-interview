import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { COLOR } from '../../const'
import Text from '../base/Text'

const RoundItem = ({index, active}) => {
    return (
        <Item active={active}>
            <Text medium size="18.4px" inherit>{index}</Text>
        </Item>
    )
}

RoundItem.propTypes = {
    index: PropTypes.number,
    active: PropTypes.bool,
}

export default RoundItem

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem 0 0;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.active ? COLOR.GREEN_TEAL : COLOR.LIGHTER_GREY};
`