import styled from "styled-components";
import {DotLottiePlayer} from "@dotlottie/react-player";
import React from "react";

const GitHubButtonStyle = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 7px;
  margin-top: 8px;
  font-size: 16px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  &hover {
    background: #fff;
  }
  
  `;

export const GitHubButton = () => {

  return (
      <>
        <GitHubButtonStyle >
          <DotLottiePlayer
              src="https://lottie.host/92ae4ef3-3bd2-4799-ace2-51273c0af321/NYbi5sSQGp.json"
              loop
              autoplay
              style={{ height: '22px', width: '22px' }}
          />
        </GitHubButtonStyle>

      </>
  );
}