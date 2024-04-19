import styled from 'styled-components';

export const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 24px;
  color: ${({theme}) => theme.main};
`;
