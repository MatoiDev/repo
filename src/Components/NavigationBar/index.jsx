import React, {useState, useEffect } from 'react'
import {Nav, NavLink, Bars, NavMenu, MenuContainer, MenuItems, CloseButton} from "./NavigationBarElements";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const NavigationBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const [toggleAnimation, setAnimationStatus] = useState(true);

    setInterval(() => setAnimationStatus(!toggleAnimation), 5000);

    return (
        <>
            <Nav>
                <NavLink to="/">

                    <DotLottiePlayer
                        src="https://assets4.lottiefiles.com/packages/lf20_mVyNF7c9vr.json"
                        loop
                        autoplay={toggleAnimation}
                        style={{ height: '100%', width: '100%' }}
                    />

                </NavLink>
                <Bars onClick={handleMenuToggle}/>
                {menuOpen && (
                    <MenuContainer menuOpen={menuOpen}>
                        <MenuItems>

                            <NavLink to="/" axtiveStyle onClick={handleMenuToggle} style={{marginBottom: "150px"}}>
                                <h1 style={{fontSize: "72px"}}>Main</h1>
                            </NavLink>

                            <NavLink to="/tweaks" axtiveStyle onClick={handleMenuToggle}>
                                <h1 style={{fontSize: "50px"}}>My Stuff</h1>
                            </NavLink>

                            <NavLink to="/install" axtiveStyle style={{marginTop: "25px"}} onClick={handleMenuToggle}>
                                <h1 style={{fontSize: "50px"}}>Repo</h1>
                            </NavLink>

                            <CloseButton onClick={handleMenuToggle}>×</CloseButton>
                        </MenuItems>
                    </MenuContainer>
                )}


                <NavMenu>
                    <NavLink to="/tweaks" axtiveStyle>My Suff</NavLink>
                    <NavLink to="/install" axtiveStyle>Repo</NavLink>
                </NavMenu>
            </Nav>
        </>
    );

}

export default NavigationBar;

