import styled from 'styled-components'

import { COLOR } from '../../const'

const List = styled.ul`
    width: 100%;
    padding: 0;

    > li {
        &:last-child {
            border-bottom: 1px solid ${COLOR.LIGHTER_GREY};
        }
    }
`

const ListItem = styled.li`
    padding: 0.75rem 0;
    list-style-type: none;
    line-height: 1;
    border-top: 1px solid ${COLOR.LIGHTER_GREY};
`

export { List, ListItem }