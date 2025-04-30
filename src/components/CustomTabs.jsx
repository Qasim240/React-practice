import React, { useState } from 'react'
import TabButtons from '../components/TabButtons'
import { EXAMPLES } from "../../data";
import Section from './Section';
const CustomTabs = () => {
    const [tabValue, settabValue] = useState("")

    const selecteHandler = (selectedButton) => {
        settabValue(selectedButton)
    }
    return (
        <>
            <Section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButtons isSelected={tabValue === "components"} onSelect={() => selecteHandler('components')}> Components </TabButtons>
                    <TabButtons isSelected={tabValue === "jsx"} onSelect={() => selecteHandler('jsx')}> JSX </TabButtons>
                    <TabButtons isSelected={tabValue === " props"} onSelect={() => selecteHandler("props")}> Props </TabButtons>
                    <TabButtons isSelected={tabValue === "state"} onSelect={() => selecteHandler('state')}> state </TabButtons>
                </menu>
            </Section>

            <Section id="tab-content">
                {!tabValue && "Please Select a topic"}
                {tabValue && <><h3>{EXAMPLES[tabValue].title}</h3>
                    <p>{EXAMPLES[tabValue].description}</p>
                    <pre>
                        {EXAMPLES[tabValue].code}
                    </pre></>}
            </Section>
        </>
    )
}

export default CustomTabs