import React from "react";
import {Overlay} from "../style";
import {Center, H1, Pfp, P, PackageManager, VerticalLineBreak} from "./style"
import SourceButton from "./SourceButton";


const RepositoriesPage = () => {

    const avatarImage = "https://i.pinimg.com/originals/26/2f/24/262f24a18dc9dd7f923f89d5cc83ee3c.png"

    const SileoImage = "https://i.pinimg.com/originals/07/10/e3/0710e36a54b2c3f38480c520dcc28b54.png"
    const CydiaImage = "https://i.pinimg.com/originals/da/a9/4c/daa94c0733997f4ca8c450c29043701f.png"
    const ZebraImage = "https://i.pinimg.com/originals/78/2e/4b/782e4b0b273fe08b02b7d6d2ea164ab1.png"

    return (
        <>
            <Overlay/>
            <Center>
                <a href={"https://github.com/matoidev/"} style={{textDecoration: "none"}}>
                    <Pfp src={avatarImage} width="100" height="100"/>
                </a>
                <a href={"https://github.com/matoidev/"} style={{textDecoration: "none", alignItems: "center"}}>
                    <H1>MatoiDev's repo</H1>
                </a>
                <P>Change begins where the comfort zone ends.</P>
            </Center>

            <div>
                <PackageManager>
                    <SourceButton url={"sileo://source/https://matoidev.github.io/repo"} imageURL={SileoImage}/>
                    <VerticalLineBreak/>
                    <SourceButton url={"zbra://sources/add/https://matoidev.github.io/repo"} imageURL={ZebraImage}/>
                    <VerticalLineBreak/>
                    <SourceButton
                        url={"cydia://url/https://cydia.saurik.com/api/share#?source=https://matoidev.github.io/repo"}
                        imageURL={CydiaImage}/>
                </PackageManager>
            </div>
        </>
    );
}

export default RepositoriesPage;


