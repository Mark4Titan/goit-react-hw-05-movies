//
import styled from 'styled-components';

export const MoviesContainer = styled('ul')`
  width: 1100px;
  background: darkgrey;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieThumb = styled('div')`
  width: 300px;
  padding: 10px;
  margin: 10px;
  display: flex;
  font-size: 24px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid grey;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 2px 1px -1px rgb(0 0 0 / 12%);
`;
