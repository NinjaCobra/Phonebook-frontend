import styled from 'styled-components';

export const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 36px;
  color: ${({ theme }) => theme.main};
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  &::file-selector-button {
    padding: 8px 14px;
    font-size: 20px;
    border-radius: 6px;
    border: none;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.main};
    cursor: pointer;
    margin-left: 10px;

    :hover {
      background-color: ${({ theme }) => theme.hover};
      box-shadow: ${({ theme }) => theme.shadow} 0px 0px 5px 2px;
    }
  }
`;

export const Select = styled.select`
  font-size: 18px;
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.hover};
  border-radius: 5px;
  outline: none;

  :focus {
    border-color: ${({ theme }) => theme.nav};
    box-shadow: ${({ theme }) => theme.shadow} 0px 0px 5px 2px;
  }
`;

export const User = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.main};
  margin-left: 10px;
`;

export const Resend = styled.button`
  font-weight: 700;
  color: ${({ theme }) => theme.main};
  margin-left: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
