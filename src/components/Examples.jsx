import Tabbuttons from "./Tabbuttons"
import { EXAMPLES } from "../data-with-examples";
import Section from "./Section";
import Tabs from "./Tabs";
//using react hooks
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()


    //using states hooks to update the data on every tab button click ubt before use import statement
    // states always gives an array , initial value is assigned to first element of array and the second element is used to update the first valeu
    // const [selectedTopic, setSelectedTopic] = useState("components")
    //giving undefined at first refresh
    // let tabContent = "initial text"

    function handleClick(value) {
        setSelectedTopic(value); // this will change selectedTopic to the value coming from the on click event
    }

    return (

        <Section title="Examples" id="examples">
            <Tabs 
            buttonsCOntainer = "menu"
            buttons={
                <div>
                    <Tabbuttons selectedHighlight={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</Tabbuttons>
                    <Tabbuttons selectedHighlight={selectedTopic === "jsx"} onClick={() => handleClick("jsx")} >JSX</Tabbuttons>
                    <Tabbuttons selectedHighlight={selectedTopic === "props"} onClick={() => handleClick("props")} >Props</Tabbuttons>
                    <Tabbuttons selectedHighlight={selectedTopic === "state"} onClick={() => handleClick("state")} >States</Tabbuttons>

                </div>
            }>

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
            </Tabs>
            {/* <menu>
               </menu> */}
        </Section>
    )
}