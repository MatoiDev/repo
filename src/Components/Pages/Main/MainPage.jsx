import React from "react";
import {Overlay, CoverText} from "../style";
import "./style.css"
import {useNavigate} from "react-router-dom";
import PreviewContent from "./PreviewContent";
import useRXImageLoader from "../../../hooks/useRXImageLoader";


const MainPage = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };


    const {
        image,
        error
    } = useRXImageLoader("https://i.pinimg.com/originals/0c/0f/ae/0c0fae102f84e893c06996ce3b415e8e.png");


    return (
        <body id="no-scroll">
        <div>
            <Overlay/>
            <CoverText>
                <section>

                    <div className="container">
                        <div
                            className={`left animated-element ${error ? 'fade-in' : ''}`}
                            style={{
                                background: `${error ? 'linear-gradient(-45deg, #eee, #ddd)' : image} no-repeat center / cover`,
                                animation: 'slide-in-left 1s ease-in-out',
                                animationFillMode: 'forwards',
                                opacity: 0,
                            }}
                        />
                            <PreviewContent />


                    </div>
                </section>
            </CoverText>
            <div
                className={`horizontal-container animated-element ${error ? 'fade-in' : ''}`}
                style={{
                    animation: 'slide-in-bottom 1s ease-in-out',
                    animationFillMode: 'forwards',
                    opacity: 0,
                }}
            >
                <button className="outlined-button" onClick={() => handleClick("/tweaks")}>My Works</button>
                <button className="filled-button" onClick={() => handleClick("/install")}>Add Repo</button>
            </div>


        </div>
        </body>

    );
}

export default MainPage;