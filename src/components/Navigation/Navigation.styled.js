import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 16px;
  font-weight: 700;
  color: ${({theme}) => theme.text};
  
  
  &.active{
    color: ${({theme}) => theme.body};
    background-color: ${({theme}) => theme.main};;
    border-radius: 8px;
  }
`;