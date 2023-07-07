import {styled, keyframes} from 'styled-components';
import {NavLink as Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";


export const Nav = styled.nav`
    background: #1c1c1e;
    // position: fixed;
    height: 80px;
    display: flex;
        align-items: leading;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
 `;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: normal;
    left:0;
    &.active {
        color: #8770c0;
        font-weight: bolder;
    }
     &:hover {
      color: #8770c0;
      font-weight: bolder;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;   
        cursor: pointer;
    }
    
    &:hover {
      color: #8770c0;
    }
`;

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @medi screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link) `
 border-radius: 4px;
 background: #256ce1;
 padding: 10px 22px;
 color: #fff;
 border: none;
 outline: none;
 cursor: pointer;
 translation: all 0.2s ease-in-out;
 text-decoration: none;
 
 &:hover {
  translation: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
 }
`


export const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${({ menuOpen }) => (menuOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  z-index: 1000;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100%
  padding: 500px;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -5px;
  right: 25px;
  font-size: 3.5rem;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
`;


