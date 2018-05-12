import styled from 'styled-components'
import PropTypes from 'prop-types'

import { COLOR } from '../../const'

const Text = styled.span.attrs({
    margin: props => props.margin || '0',
    size: props => props.size || '1rem',
    color: props => props.color || COLOR.GREY,
})`
    font-family: 'Prompt', sans-serif;
    font-size: ${props => props.extra ? '2.5rem'
        : props.header ? '1.5rem'
        : props.large ? '1.25rem'
        : props.small ? '0.75rem' 
        : props.size
    };
    font-weight: ${props => props.semibold ? '600'
        : props.medium ? '500'
        : props.light ? '300' : '400'
    };
    font-style: ${props => props.italic ? 'italic' : 'normal'};
    line-height: 1;
    margin: ${props => props.margin};
    color: ${props => props.inherit ? 'inherit' : props.color};
`

Text.propTypes = {
    margin: PropTypes.string,
    
    // font-size
    extra: PropTypes.bool,
    header: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    size: PropTypes.string,

    // font-weight
    semibold: PropTypes.bool,
    medium: PropTypes.bool,
    light: PropTypes.bool,

    // font-style
    italic: PropTypes.bool,

    // font-color
    inherit: PropTypes.bool,
    color: PropTypes.string,
}

export default Text