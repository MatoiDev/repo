import React from "react";
import "./style.css"


export const GlowButton = ({text}) => {

    return (
        <div>
            <button className="glow-on-hover" type="button">{text}</button>
        </div>
    );
}