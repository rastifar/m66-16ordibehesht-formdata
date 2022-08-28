import React from 'react'

import { NavLink } from 'react-router-dom'
import Profile from './Profile'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import {setTheme} from "../store/themeSlice"

const Nav= styled.nav`
background-color: ${props => props.theme.colors.primrose};
margin-bottom: 60px
`

const StyledNavLink = styled(NavLink)`
    text-decoration: ${(props) => {
    console.log(props);
    return props.style ? (isActive) => (isActive ? "underline" : "none") : "none";
    }}; 
    margin-right: 15px;
  &:hover {
    text-decoration: underline;
  }
 &[class*="active"] {
    color: red;
  }
`;
export const Navbar = () => {
  const dispatch = useDispatch();

  function toggleTheme(){
    dispatch(setTheme("dark"))
  }

  return (
    <Nav>
      <section style={{marginBottom: "24px"}}>
        <h1>Redux Essentials Example</h1>
        <button onClick={toggleTheme}>toggle theme</button>
        <Profile sex="mr"/>
      
            <StyledNavLink to={"/login"}>login</StyledNavLink>
            <StyledNavLink to={"invoices"}>invoice main pag</StyledNavLink>
            <StyledNavLink to={"/create"}>create invoice</StyledNavLink>
       
      </section>
    </Nav>
  )
}
