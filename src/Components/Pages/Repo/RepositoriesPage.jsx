import React from "react";
import {CoverText, Overlay, PageTitleForDebug} from "../style";
import {Center, H1, Pfp, P, PackageManager, VerticalLineBreak} from "./style"
import SileoImage from "../../../assets/sileo.png"
import ZebraImage from "../../../assets/zbra.png"
import CydiaImage from "../../../assets/cydia.png"
import SourceButton from "./SourceButton";
import RepoLogo from "../../../assets/repologo.png"


const RepositoriesPage = () => {
    return (
        <>
            <Overlay/>
            <Center >
                <Pfp src={RepoLogo} alt="CydiaIcon" width="100" height="100"/>
                <H1>MatoiDev's repo</H1>
                <P>Change begins where the comfort zone ends.</P>
            </Center>

            <div>
                <PackageManager>
                    <SourceButton url={"sileo://source/https://matoidev.github.io/repo"} image={SileoImage}/>
                    <VerticalLineBreak/>
                    <SourceButton url={"zbra://sources/add/https://matoidev.github.io/repo"} image={ZebraImage}/>
                    <VerticalLineBreak/>
                    <SourceButton url={"cydia://url/https://cydia.saurik.com/api/share#?source=https://matoidev.github.io/repo"} image={CydiaImage}/>
                </PackageManager>
            </div>
        </>
    );
}

export default RepositoriesPage;


