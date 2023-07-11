import React from 'react';
import "./style.css"
import useRXImageLoader from "../../../hooks/useRXImageLoader";

const HorizontalContainer = ({src, headerText, footerText}) => {

    const { image } = useRXImageLoader(src);
    return (
        <div
            id="BackgroundContainer"
            className="BackgroundContainer"
        >
            <img
                src={image}
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