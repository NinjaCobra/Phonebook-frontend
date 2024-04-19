import styled from 'styled-components';
import {MdContactPhone} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export const Icon = styled(MdContactPhone)`
    height: 160px;
    width: 160px;
    color: ${({theme}) => theme.main}; 
`;

export const Title = styled.h1`
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 36px;
    color: ${({theme}) => theme.main}; 
`;

export const Text = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.text};
`;

export const StartLink = styled(NavLink)`
    border: 0 solid transparent;
    border-radius: 4px;
    color: ${({theme}) => theme.body}; 
    background-color: ${({theme}) => theme.main}; 
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 16px;

    :hover, :focus {
        color: ${({theme}) => theme.text}; 
        background-color: ${({theme}) => theme.hover}; 
        box-shadow: ${({theme}) => theme.shadow}  0px 0px 5px 2px;
    }
`;