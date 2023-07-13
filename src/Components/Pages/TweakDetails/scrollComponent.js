import React from 'react';
import styled from 'styled-components';


export const ScrollContainer = styled.div`
  width: calc(100% - ${props => props.isMobile ? "32px" : "64px"});
  margin-left: ${props => props.isMobile ? "16px" : "32px"};
  margin-right: ${props => props.isMobile ? "16px" : "32px"};
  height: auto;
  margin-top: 560px;
  position: absolute;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-left: 16px;
  padding-right: 16px;

  ::-webkit-scrollbar {
    display: none; /* Убираем полосу прокрутки */
  }
`;

export const Content = styled.div`
  display: inline-block;
  margin-bottom: 8px;
`;

