import React from "react";
import { Center, SectionName } from "./style";
import HorizontalContainer from "./HStack";



const Section = ({ data }) => {

    return (
        <>
            <Center>
                <SectionName>{"Tweaks"}</SectionName>
                <table style={{ width: "100%" }}>
                    {Object.keys(data)
                        .filter((key) => data[key].section === "Tweaks")
                        .sort((a, b) => (a.name > b.name ? 1 : -1))
                        .map((key) => {
                            return (
                                <tr key={key}>
                                    <div style={{ paddingBottom: "16px" }}>
                                        <HorizontalContainer
                                            src={data[key].icon}
                                            headerText={data[key].name}
                                            footerText={data[key].description}
                                        />
                                    </div>
                                </tr>
                            );
                        })}
                </table>
                <SectionName>{"Applications"}</SectionName>

                <table style={{ width: "100%" }}>
                    {Object.keys(data)
                        .filter((key) => data[key].section === "Applications")
                        .sort((a, b) => (a.name > b.name ? 1 : -1))
                        .map((key) => {
                            return (
                                <tr key={key}>
                                    <div style={{ paddingBottom: "16px" }}>
                                        <HorizontalContainer
                                            src={data[key].icon}
                                            headerText={data[key].name}
                                            footerText={data[key].description}
                                        />
                                    </div>
                                </tr>
                            );
                        })}
                </table>
            </Center>
        </>
    );
};

export default Section;
