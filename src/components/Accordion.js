import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { COLOR } from '../const'
import Flex from './base/Flex'
import Text from './base/Text'
import TriangleIcon from './Icon/TriangleIcon'

class Accordion extends Component {
    state = {
        title: this.props.title,
        showDetail: false,
    }

    toggleShowDetail = () => {
        this.setState({
            showDetail: this.state.showDetail ? false : true
        })
    }

    render() {
        return (
            <Flex col fullWidth onClick={this.toggleShowDetail}>
                <AccordionTitle>
                    <TriangleIcon down={this.state.showDetail} />
                    <Text light inherit>{this.state.title}</Text>
                </AccordionTitle>
                { this.state.showDetail ? this.props.children : null }
            </Flex>
        )
    }
}

Accordion.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

export default Accordion

const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    min-width: fit-content;

    padding: 0.25rem 0;

    fill: ${COLOR.GREEN_BLUE};
    color: ${COLOR.GREEN_BLUE};
    cursor: pointer;

    &:hover {
        fill: ${COLOR.LIGHT_GREEN_BLUE};
        color: ${COLOR.LIGHT_GREEN_BLUE};
    }

    &:active {
        fill: ${COLOR.DARK_GREEN_BLUE};
        color: ${COLOR.DARK_GREEN_BLUE};
    }

    > * {
        :not(:last-child) {
            margin-right: 0.5rem;
        }
    }
`
