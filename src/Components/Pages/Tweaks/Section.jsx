import React from "react"
import {Center, SectionName, fetchImage} from "./style";
import HorizontalContainer from "./HStack";

const Section = ({data}) =>  {

    return (
        <>
            <Center>

                <SectionName>{"Tweaks"}</SectionName>
                <table style={{width: "100%"}}>
                    {Object.keys(data).filter(key => data[key].section == "Tweaks").sort((a, b) => (a.name > b.name) ? 1 : -1).map((key) => (
                        <tr >
                            <div key={key} style={{paddingBottom: "16px"}}>
                                <HorizontalContainer src={fetchImage(data[key].icon) } headerText={data[key].name} footerText={data[key].description} />
                            </div>
                        </tr>
                    ))}
                </table>

                <SectionName>{"Applications"}</SectionName>
                <table style={{width: "100%"}}>
                    {Object.keys(data).filter(key => data[key].section == "Applications").sort((a, b) => (a.name > b.name) ? 1 : -1).map((key) => (
                        <tr >
                            <div key={key} style={{paddingBottom: "16px"}}>
                                <HorizontalContainer src={fetchImage(data[key].icon) } headerText={data[key].name} footerText={data[key].description} />
                            </div>
                        </tr>
                    ))}
                </table>

            </Center>
        </>
    );
}
export default Section