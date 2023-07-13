import React from "react"
import useRXImageLoader from "../../../hooks/useRXImageLoader";

const SourceButton = ({url, imageURL, marginal=0}) => {

    const {image} = useRXImageLoader(imageURL)

    return (
        <a href={url} target="_blank"><img alt="" style={{borderRadius: 5, margin:marginal}} id="pm" src={image} width="32" height="32"/></a>
    );
}

export default SourceButton;