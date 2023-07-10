import styled from "styled-components";
import decard from "../../../assets/decard.svg"
import violet from "../../../assets/violet.png"
import notifake from "../../../assets/notifake.svg"


export function fetchImage(byPath) {
    switch (byPath) {
        case "decard": return decard
        case "violet": return violet
        case "notifake": return notifake
    }
}

export const Center = styled.div`
  position: absolute;
  top: 0px;
  padding-top: 80px;
  height: 100%;
  margin-right: 0 auto;
  left:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-items: start;
`;

export const SectionName = styled.h2`
    display: block;
    font-size: 2em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: white;
    margin-left: 32px;
`;

export const BackgroundContainer = styled.div`
      width: auto;
      height: 120px;
      display: flex;
      margin-left: 32px;
      margin-right: 32px";
      align-items: center';
      border-radius: 15px";
      background: rgba(28,28,30, 0.95);
      &hover {
        background: rgba(100, 100, 100, 0.95)
      } 
`;