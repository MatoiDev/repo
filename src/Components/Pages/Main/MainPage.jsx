import React from "react";
import {Overlay, CoverText} from "../style";
import "./style.css"
import { useNavigate } from "react-router-dom";
import PreviewContent from "./PreviewContent";
import useRXImageLoader from "../../../hooks/useRXImageLoader";



const MainPage = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    const { image, error } = useRXImageLoader("https://i.pinimg.com/originals/fc/91/6d/fc916da2dbe349dd77565ee0ecf9480a.png");

    return (
        <body id="no-scroll">
        <div>
            <Overlay/>
            <CoverText>
                <section>
                    <div className="container">
                        <div
                            className="left"
                            style={{background: `${ error ? `linear-gradient(-45deg, #eee, #ddd)`: image} no-repeat center / cover`}}/>
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