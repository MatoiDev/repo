import {CoverText, Overlay} from "../style";
import React, { useEffect, useState } from 'react';
import {Center} from "./style";
import data from "../../../data/data.json"
import Section from "./Section";

function TweaksPage() {
    return (
        <>
            <Overlay/>
            <Section data={data}/>
        </>
    );
}

export default TweaksPage;


