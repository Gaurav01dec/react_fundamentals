import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data-with-examples"

export default function AllCoreConcepts(){
    return (
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
    )
}