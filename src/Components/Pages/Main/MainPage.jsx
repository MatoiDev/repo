import React from "react";
import PreviewContent, {Overlay, CoverText} from "../style";
import "./style.css"
import {Link, useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <body id="no-scroll">
        <div>
            <Overlay/>
            <CoverText>
                <section>
                    <div className="container">
                        <div className="left"/>
                        <PreviewContent/>
                    </div>
                </section>
            </CoverText>
            <div className="horizontal-container">
                <button className="outlined-button" onClick={() => handleClick("/tweaks")}>My Works</button>
                <button className="filled-button" onClick={() => handleClick("/install")}>Add Repo</button>
            </div>
        </div>
        </body>

    );
}

export default MainPage;