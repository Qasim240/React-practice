import React from 'react'
import { CORE_CONCEPTS } from '../../data'
import CoreConcepts from '../CoreConcepts'
import Section from './Section'
export const CoreConcept = () => {
    return (
        <>
            <Section id="core-concepts">
                {CORE_CONCEPTS.map((Conceptitem) => <CoreConcepts key={Conceptitem.title} {...Conceptitem} />)}
            </Section>

        </>
    )
}
