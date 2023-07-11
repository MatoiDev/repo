import React, {useRef, useEffect} from 'react';
import {
    Video,
    VideoWrapper

} from "./style";


const AutoreverseVideoBackground= ({src}) => {
    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnd = () => {
            video.currentTime = 0;
            video.playbackRate = -1;
            video.play();
        };

        video.addEventListener('ended', handleVideoEnd);

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, []);



        return (
            <div>
                <VideoWrapper alignBottom={true}>
                    <Video ref={videoRef} src={src} loop autoPlay muted playsInline/>
                </VideoWrapper>
            </div>

        );


};

export default AutoreverseVideoBackground;
