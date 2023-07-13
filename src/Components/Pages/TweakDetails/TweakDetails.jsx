import React, {useState} from "react";
import data from "../../../data/data.json"
import useRXImageLoader from "../../../hooks/useRXImageLoader";
import {Overlay} from "../style";
import {HorizontalContainer, Banner} from "./style";
import HorizontalSeparator from "../style";
import {HInformationStack, InformationSegment, VerticalDivider} from "./style";
import {useMediaQuery} from "react-responsive";
import {Content, ScrollContainer} from "./scrollComponent";
import ClickAwayListener from 'react-click-away-listener';
import "./style";
import "./style.css"
import SourceButton from "../Repo/SourceButton";

const TweakDetails = () => {

    const tweak = data[window.location.pathname.split("/")[2]];

    const {image} = useRXImageLoader(tweak.icon)
    const isMobile = useMediaQuery({maxWidth: 767})

    const minOS = tweak.compatibility.firmware["miniOS"]
    const maxOS = tweak.compatibility.firmware["maxiOS"]

    const [popup, setPopup] = useState(false)

    const SileoImage = "https://i.pinimg.com/originals/07/10/e3/0710e36a54b2c3f38480c520dcc28b54.png"
    const CydiaImage = "https://i.pinimg.com/originals/da/a9/4c/daa94c0733997f4ca8c450c29043701f.png"
    const ZebraImage = "https://i.pinimg.com/originals/78/2e/4b/782e4b0b273fe08b02b7d6d2ea164ab1.png"

    return (
        <>
            <Overlay isMain={true}/>
            <Banner src={tweak.banner}/>
            <HorizontalContainer src={image}
                                 tweak={tweak}
                                 completion={() => setPopup(true)}

            />
            <HorizontalSeparator isMobile={isMobile}/>
            <HInformationStack>
                <InformationSegment category="Category" definition={tweak.section}/>
                <VerticalDivider/>
                <InformationSegment category="iOS Compatibility" definition={minOS + " - " + maxOS}/>
                <VerticalDivider/>
                <InformationSegment category="Version" definition={tweak.version}/>
                <VerticalDivider/>
                <InformationSegment category="Size" definition={__human_readable_filesize_of(tweak.size)}/>
            </HInformationStack>
            <ScrollContainer style={{paddingLeft: "16px", paddingRight: "16px"}} isMobile={isMobile}>
                <Content>
                    {tweak.screenshots.map((url, index) => (
                        <img alt="" width="auto" height={"512px"} style={{margin: "4px", borderRadius: "10px"}} key={index}
                             src={url}/>
                    ))}

                </Content>
            </ScrollContainer>

            {popup && (
                <div style={{

                    display: "flex",
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    zIndex: 10000,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div className={`${popup ? 'popup-overlay' : 'popup-hide'}`}>
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                            <div className="popup-container">
                                <div className="popup-content">
                                    <div className={'popup'} style={{display: "flex", flexDirection: "column"}}>

                                        <div style={{display: "flex", justifyContent: "center", width: "250px", height: "100px", background: "rgba(0,0,0,0.75)", borderRadius: "15px",alignItems: "center", padding: "16px" }}>

                                            <SourceButton marginal={8} url={"sileo://source/https://matoidev.github.io/repo"}
                                                          imageURL={SileoImage}/>
                                            <SourceButton marginal={8} url={"zbra://sources/add/https://matoidev.github.io/repo"}
                                                          imageURL={ZebraImage}/>
                                            <SourceButton marginal={8}
                                                          url={"cydia://url/https://cydia.saurik.com/api/share#?source=https://matoidev.github.io/repo"}
                                                          imageURL={CydiaImage}/>
                                        </div>
                                        <div style={{flex: 1}}></div>
                                    </div>
                                </div>
                            </div>

                        </ClickAwayListener>
                    </div>
                </div>
            )}

        </>
    );
};

export default TweakDetails;


function __human_readable_filesize_of(bytes, si = false, dp = 1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZiB', 'YB'];
    let u = -1;
    const r = 10 ** dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


    return bytes.toFixed(dp) + ' ' + units[u];
}