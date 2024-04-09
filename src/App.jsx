//importing data for components
import { CORE_CONCEPTS } from "./data-with-examples.js"
import { EXAMPLES } from "./data-with-examples.js";
//importing react components
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import Tabbuttons from "./components/Tabbuttons.jsx";
// import TabButtonData from "./components/TabButtonData.jsx"
//using react hooks
import { useState } from "react";

function App() {
  console.log(EXAMPLES.components.title);
  //using states hooks to update the data on every tab button click ubt before use import statement
  // states always gives an array , initial value is assigned to first element of array and the second element is used to update the first valeu
  // const [selectedTopic, setSelectedTopic] = useState("components")
  //giving undefined at first refresh
  const [selectedTopic, setSelectedTopic] = useState()



  // let tabContent = "initial text"

  function handleClick(value) {
    setSelectedTopic(value); // this will change selectedTopic to the value coming from the on click event
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {/* method 1 */}
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

            {/* if we have n number of records then we can use the map method to do it */}
            {/* method 2 */}
            {/* {CORE_CONCEPTS.map((element) => <CoreConcept {...element} />)} */}
          </ul>
        </section>

        <section id="examples">
          <h2>Topics</h2>
          <menu>
            <Tabbuttons selectedHighlight={selectedTopic === "components"} onSelect={() => handleClick("components")}>Components</Tabbuttons>
            <Tabbuttons selectedHighlight={selectedTopic === "jsx"} onSelect={() => handleClick("jsx")} >JSX</Tabbuttons>
            <Tabbuttons selectedHighlight={selectedTopic === "props"} onSelect={() => handleClick("props")} >Props</Tabbuttons>
            <Tabbuttons selectedHighlight={selectedTopic === "state"} onSelect={() => handleClick("state")} >States</Tabbuttons>
          </menu>

          {/* using ternary statements to render the dynamic content */}
          {/* more concise way below */}
          {/* if not selected or undefined */}
          {/* {!selectedTopic ? <p>Please select a topic</p> : null} */}
          {/* if selected */}
          {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)
            : null} */}

          {/* more concise way */}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)
            : <p>Please select a topic</p>}


        </section>
      </main>
    </div>
  );
}

export default App;
