import React, { useState } from 'react'
import TabButtons from '../components/TabButtons'
import { EXAMPLES } from "../../data";
import Section from './Section';
import Tabs from './Tabs';
const CustomTabs = () => {
    const [tabValue, settabValue] = useState("")

    const selecteHandler = (selectedButton) => {
        settabValue(selectedButton)
    }
    return (
        <>
            <Section id="examples" title="Exmaple">
                <Tabs ButtonsContainer="menu"
                    TabsButtons={
                        <>
                            <TabButtons isSelected={tabValue === "components"} onSelect={() => selecteHandler('components')}> Components </TabButtons>
                            <TabButtons isSelected={tabValue === "jsx"} onSelect={() => selecteHandler('jsx')}> JSX </TabButtons>
                            <TabButtons isSelected={tabValue === " props"} onSelect={() => selecteHandler("props")}> Props </TabButtons>
                            <TabButtons isSelected={tabValue === "state"} onSelect={() => selecteHandler('state')}> state </TabButtons>
                        </>

                    }>

                    <Section id="tab-content">
                        {!tabValue && "Please Select a topic"}
                        {tabValue && <><h3>{EXAMPLES[tabValue].title}</h3>
                            <p>{EXAMPLES[tabValue].description}</p>
                            <pre>
                                {EXAMPLES[tabValue].code}
                            </pre></>}
                    </Section>

                </Tabs>
            </Section>
        </>
    )
}

export default CustomTabs