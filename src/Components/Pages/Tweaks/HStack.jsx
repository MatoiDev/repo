import React from 'react';
import "./style.css"
import {BackgroundContainer} from "./style.js";

const HorizontalContainer = ({src, headerText, footerText}) => {
    return (
        <div
            id="BackgroundContainer"
            className="BackgroundContainer"
        >
            <img
                src={src}
                alt="image"
                style={{ width: '80px', height: '80px', marginLeft: "16px" }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginLeft: '16px',
                }}
            >
        <span
            style={{
                fontWeight: 'bold',
                color: 'white',
            }}
        >
         {headerText}
        </span>
                <span style={{ color: 'gray' }}>{footerText}</span>
            </div>
        </div>
    );
};

export default HorizontalContainer;