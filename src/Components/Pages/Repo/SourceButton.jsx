import React from "react"
import useRXImageLoader from "../../../hooks/useRXImageLoader";

const SourceButton = ({url, imageURL}) => {

    const {image} = useRXImageLoader(imageURL)

    return (
        <a href={url} target="_blank"><img style={{borderRadius: 5}} id="pm" src={image} alt="srcImg" width="32" height="32"/></a>
    );
}

export default SourceButton;