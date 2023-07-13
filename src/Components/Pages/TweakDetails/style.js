import React from 'react';
import useRXImageLoader from "../../../hooks/useRXImageLoader";
import styled from 'styled-components';
import InstallButton from "./GlowButton";
import {useMediaQuery} from "react-responsive";
import {GitHubButton} from "./GitHubButton";


export const HInformationStack = styled.div`
  display: flex;
  position: absolute;
  margin-top: 500px;
  width: 100%;
  justify-content: center;
`;


export const InformationSegment = ({ category, definition }) => {
    const isMobile = useMediaQuery({maxWidth: 767})
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <p style={{ fontWeight: "inherit", color: "gray", fontSize: `${isMobile ? "11px" : "16px"}` }}>{category}</p>
            <p style={{ fontWeight: "bold", color: "lightgray", fontSize: `${isMobile ? "16px" : "20px"}` }}>{definition}</p>
        </div>
    );
};

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: gray;
  margin: 0 16px;
`;



const TweakHeader = styled.div({
      position: "absolute",
      marginTop: "350px",
      width: "auto",
      height: "120px",
      display: "flex",
      marginLeft: "32px",
      marginRight: "32px",
      alignItems: "center",
      justifyContent: "center"

});

const BannerWrapper = styled.img ({
    width: "100%",
    height: "250px",
    position: "absolute",
    marginTop: "80px",
    objectFit: "cover"
});

export const Banner = ({ src }) => { return ( <> <BannerWrapper src={src}/> </> ); }

export const HorizontalContainer = ({src, tweak, completion}) => {

    const {image} = useRXImageLoader(src);

    return (
        <TweakHeader>
            <img src={image} alt="" style={{width: '100px', height: '100px', marginLeft: "16px"}} />
            <div style={{ display: 'flex',  flexDirection: 'column',  justifyContent: 'center',  marginLeft: '16px' }} >
                <span style={{ fontWeight: 'bold', color: 'white' }}> { tweak.name } </span>
                <span style={{ color: 'gray' }}>{ tweak.description }</span>
                <div style={{display: "flex"}}>
                    <InstallButton type="button" onClick={completion}>Install</InstallButton>
                    <a href={tweak.sourceCode} style={{textDecoration: "none"}}>
                        <GitHubButton />
                    </a>

                </div>

            </div>
        </TweakHeader>
    );
};
