import {useMediaQuery} from "react-responsive";
import {Stack} from "react-bootstrap";
import React from "react";
import {AnimatedText} from "../style";
import "./style.css"

function PreviewContent() {

    const isMobile = useMediaQuery({maxWidth: 768});
    const isMobileHeight = useMediaQuery({maxHeight: 771})

    return (
        <div
             className={`right animated-element}`}
             style={{
                 animation: 'slide-in-right 1s ease-in-out',
                 animationFillMode: 'forwards',
                 opacity: 0,
             }}>
            <Stack gap={0}>
                <div className="p-2">
                    <p>
                        <span style={{
                            fontSize: `${isMobileHeight ? "24px" : !isMobile ? "48px" : "36px"}`,
                            fontWeight: "initial"
                        }}>Hello there!</span>
                        <span style={{
                            fontSize: `${isMobileHeight ? "18px" : !isMobile ? "24px" : "18px"}`,
                            color: "lightgray",
                            fontWeight: `${!isMobile ? "lighter" : "normal"}`
                        }}> My name is</span>
                    </p>
                    <p style={{
                        fontSize: `${isMobileHeight ? "50px" : !isMobile ? "100px" : "75px"}`,
                        fontWeight: "bolder",
                        marginTop: "-10px"
                    }}>Matvey</p>
                    <p style={{
                        fontSize: `${isMobileHeight ? "50px" : !isMobile ? "100px" : "75px"}`,
                        fontWeight: "bolder",
                        marginTop: `${isMobileHeight ? "-10px" : !isMobile ? "-30px" : "-25px"}`,
                        marginBottom: `${isMobileHeight ? "0px" : !isMobile ? "45px" : "20px"}`
                    }}>Titor</p>
                </div>
                <div className="p-2">
                    <AnimatedText style={{marginTop: `${isMobileHeight ? "-10px" : "10px"}`}}/>
                </div>
            </Stack>
        </div>
    );
}

export default PreviewContent;