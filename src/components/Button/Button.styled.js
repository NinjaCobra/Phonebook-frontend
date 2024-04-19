import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 8px 14px;
  font-size: 20px;
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.main};
  cursor: pointer;
  margin-bottom: 10px;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    box-shadow: ${({ theme }) => theme.shadow} 0px 0px 5px 2px;
  }

  :disabled {
    background: #dddddd;
    box-shadow: none;
    cursor: not-allowed;
  }
`;
