import styled from 'styled-components';

import { COLOR } from '../../const'

const Button = styled.button`
    width: fit-content;
    height: 35px;
    min-width: 120px;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: white;
    fill: ${COLOR.GRAPEFRUIT};
    color: ${COLOR.GRAPEFRUIT};
    border-radius: 17.5px;
    border: solid 1px ${COLOR.GRAPEFRUIT};
    cursor: pointer;

    &:hover {
        fill: ${COLOR.LIGHT_GRAPEFRUIT};
        color: ${COLOR.LIGHT_GRAPEFRUIT};
        border-color: ${COLOR.LIGHT_GRAPEFRUIT};
    }

    &:active {
        fill: ${COLOR.DARK_GRAPEFRUIT};
        color: ${COLOR.DARK_GRAPEFRUIT};
        border-color: ${COLOR.DARK_GRAPEFRUIT};
    }

    &:focus {
        outline: none;
    }

    > * {
        :not(:last-child) {
            margin-right: 0.5rem;
        }
    }
`

export default Button