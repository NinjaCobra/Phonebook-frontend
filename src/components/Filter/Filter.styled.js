import styled from "styled-components";

export const FilterContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  border: 2px solid ${({theme}) => theme.hover};
  border-radius: 5px;
  outline: none;
  
  :focus {
    border-color: ${({theme}) => theme.nav};
    box-shadow: ${({theme}) => theme.shadow} 0px 0px 5px 2px;
  }
`