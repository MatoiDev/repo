import React from "react";
import {HeaderContainer} from "./style";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>
                <h3>Main Page</h3>
            </Link>

            <Link to="/LightSteelBlue">
                <h3>LightSteelBlue</h3>
            </Link>

            <Link to="/Lavender">
                <h3>Lavender</h3>
            </Link>

            <Link to="/Maroon">
                <h3>Maroon</h3>
            </Link>

        </HeaderContainer>

    );
}


export default Header;