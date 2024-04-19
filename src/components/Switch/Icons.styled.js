import styled from "styled-components";
import {GiStripedSun,GiMoon} from 'react-icons/gi';


export const Sun = styled(GiStripedSun)`
    size: 21px;
    color: ${({theme}) => theme.sun};
`;

export const Moon = styled(GiMoon)`
    size: 21px;
    color: ${({theme}) => theme.moon};
`;