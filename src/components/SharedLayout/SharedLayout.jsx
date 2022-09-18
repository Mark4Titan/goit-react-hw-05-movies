import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
//
import * as SC from '../App/App.styled';
//
export const SharedLayout = () => {
  return (
    <>
      <SC.StyledHeader>
        <SC.StyledNav>
          <NavLink to="/goit-react-hw-05-movies/">Home</NavLink>
          <NavLink to="/movies"> Movies</NavLink>
        </SC.StyledNav>
      </SC.StyledHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
