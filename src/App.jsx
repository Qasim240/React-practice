import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";
import TabButtons from "./components/TabButtons";
import { useState } from "react";
import { EXAMPLES } from "../data";
function App() {
  const [tabValue, settabValue] = useState("")

  const selecteHandler = (selectedButton) => {
    settabValue(selectedButton)
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>

      <section id="core-concepts">
        <CoreConcepts  {...CORE_CONCEPTS[0]} />
        <CoreConcepts {...CORE_CONCEPTS[1]} />
        <CoreConcepts {...CORE_CONCEPTS[2]} />
        <CoreConcepts {...CORE_CONCEPTS[3]} />
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButtons isSelected={tabValue === "components"} onSelect={() => selecteHandler('components')}> Components </TabButtons>
          <TabButtons isSelected={tabValue === "jsx"} onSelect={() => selecteHandler('jsx')}> JSX </TabButtons>
          <TabButtons isSelected={tabValue ===" props"} onSelect={() => selecteHandler("props")}> Props </TabButtons>
          <TabButtons isSelected={tabValue === "state"} onSelect={() => selecteHandler('state')}> state </TabButtons>
        </menu>
      </section>
      <section id="tab-content">
        {!tabValue && "Please Select a topic"}
        {tabValue && <><h3>{EXAMPLES[tabValue].title}</h3>
          <p>{EXAMPLES[tabValue].description}</p>
          <pre>
            {EXAMPLES[tabValue].code}
          </pre></>}



      </section>
    </div>
  );
}

export default App;
