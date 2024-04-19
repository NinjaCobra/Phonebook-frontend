import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  outline: 2px ${({ theme }) => theme.main} solid;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.hover};
`;

export const Welcome = styled.span`
  font-weight: 500;
  margin-right: 5px;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  background-color: rgb(187, 196, 198);
  padding: 5px;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.hover};
    box-shadow: ${({ theme }) => theme.shadow} 0px 0px 5px 2px;
    color: ${({ theme }) => theme.nav};
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    border-radius: 8px;
  }
`;
