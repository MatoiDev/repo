import styled from "styled-components";

export const VideoWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: ${/* Низ видео будет прикреплен к низу экрана */ props => props.alignBottom ? 'flex-end' : 'flex-start'};
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;


