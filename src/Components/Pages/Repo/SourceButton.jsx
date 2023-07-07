import React from "react"

const SourceButton = ({url, image}) => {
    return (
        <a href={url} target="_blank"><img style={{borderRadius: 5}} id="pm" src={image} alt="srcImg" width="32" height="32"/></a>
    );
}

export default SourceButton;