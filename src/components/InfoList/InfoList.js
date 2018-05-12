import styled from 'styled-components';
import { COLOR } from '../../const'

const InfoList = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
    width: 100%;

    > * {
        &:not(:last-child) {
            border-right: 1px solid ${COLOR.LIGHT_GREY}
        }
    }
`

export default InfoList