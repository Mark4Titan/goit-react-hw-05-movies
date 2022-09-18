import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')`
  display: grid;
  grid-template-columns: 320px 1fr;
`;

export const Info = styled('div')`
  padding: 16px;
  background-color: '#07c';
`;

export const GoBack = styled(NavLink)`
  border: solid 1px black;
  display: inline-flex;
  margin: 8px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 2em;
  border-radius: 5px;
  background-color: darkgray;
  padding: 5px;
  color: black;
`;
