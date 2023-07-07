import React, { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import Typed from 'typed.js';
import { useMediaQuery } from "react-responsive";
import {Stack} from "react-bootstrap";




function PreviewContent() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isMobileHeight = useMediaQuery({maxHeight: 771})

    return (
        <div className="right">
            <Stack gap={0}>
                <div className="p-2">
                    <p>
                        <span style={{ fontSize: `${isMobileHeight ? "24px": !isMobile ?  "48px" : "36px"}`, fontWeight: "initial" }}>Hello there!</span>
                        <span style={{ fontSize: `${isMobileHeight ? "18px": !isMobile ? "24px" : "18px"}`, color: "lightgray", fontWeight: `${!isMobile ? "lighter" : "normal"}` }}> My name is</span>
                    </p>
                    <p style={{ fontSize: `${isMobileHeight ? "50px": !isMobile ? "100px" : "75px"}`, fontWeight: "bolder", marginTop: "-10px"}}>Matvey</p>
                    <p style={{ fontSize: `${isMobileHeight ? "50px": !isMobile ? "100px" : "75px"}`, fontWeight: "bolder", marginTop: `${isMobileHeight ? "-10px": !isMobile ? "-30px" : "-25px"}`, marginBottom: `${isMobileHeight ? "0px" : !isMobile ? "45px" : "20px"}`}}>Titor</p>
                </div>
                <div className="p-2">
                    <AnimatedText style={{ marginTop: `${isMobileHeight ? "-10px":"10px" }`  }}/>
                </div>
            </Stack>
        </div>
    );
}

export default PreviewContent;


export const PageTitleForDebug = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 80;
`;

export const HStack = styled.div`
    display: flex;
    flex-direction: row;
 `;

export const CoverText = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 80px;
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    z-index: 0;
`;


export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 80px;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .7);  
`;

export const Avatar = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: absolute;
`;




export function AnimatedText() {

    const el = React.useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isMobileHeight = useMediaQuery({maxHeight: 771})

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['iOS <b style="color: white">Applications</b> developer', 'Jailbreak <b style="color: white">Tweaks</b> enthusiast'],
            typeSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="App">
            <span ref={el} style={{fontSize:  `${isMobileHeight ? "14px" : !isMobile ? "24px" : "14px"}`, color: "lightgray", marginTop: `${isMobileHeight ? "10px" : "30px"}`, fontWeight: "inherit"}} />
        </div>
    );
}


