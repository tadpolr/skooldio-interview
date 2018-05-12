import styled from 'styled-components'
import PropTypes from 'prop-types'

const Flex = styled.div.attrs({
    margin: props => props.margin || '0',
})`
    display: flex;
    flex-direction: ${props => props.col ? 'column' 
        : props.row ? 'row' : 'row'
    };

    justify-content: ${props => props.center ? 'center' 
        : props.start ? 'flex-start'
        : props.end ? 'end'
        : props.between ? 'space-between'
        : props.around ? 'space-around' : 'unset'
    };

    align-items: ${props => props.alignCenter ? 'center' 
        : props.alignStart ? 'flex-start'
        : props.alignEnd ? 'flex-end' 
        : props.alignBaseline ? 'baseline' : 'unset'
    };

    width: ${props => props.fullWidth ? '100%' : 'fit-content'}
    margin: ${props => props.margin}
`

Flex.propTypes = {
    margin: PropTypes.string,
    fullWidth: PropTypes.bool,
    
    // flex direction
    col: PropTypes.bool,
    row: PropTypes.bool,

    // justify-content
    center: PropTypes.bool,
    start: PropTypes.bool,
    end: PropTypes.bool,
    between: PropTypes.bool,
    around: PropTypes.bool,

    // align-items
    alignCenter: PropTypes.bool,
    alignStart: PropTypes.bool,
    alignEnd: PropTypes.bool,
    alignBaseline: PropTypes.bool,
}

export default Flex