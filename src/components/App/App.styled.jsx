import styled from 'styled-components';

export const StyledNav = styled('nav')`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(5)}; ;
`;
//
export const StyledHeader = styled('header')`
  background-color: lightgray;
  padding: ${props => props.theme.spacing(3, 4)};
`;
