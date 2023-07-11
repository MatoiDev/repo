import React  from 'react';
import { styled } from 'styled-components';
import Typed from 'typed.js';
import { useMediaQuery } from "react-responsive";

export const CoverText = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0px;
    padding-top: 160px;
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    z-index: 0;
`;


export const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0px;
    background-color: rgba(0, 0, 0, .7);  
    z-index: 0;
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


