import {useState, useEffect} from 'react'
import {glossary} from "../component/GlossaryDefinitions"
export default function GlossaryDefinitionComponent() {
    const [definitions, setDefinitions] = useState([])
    useEffect(()=>{
        //we first gather all glossary entries
        const arr =  glossary.map((entry, index)=>{
            return (
                <DefinitionComponent 
                    key={`defCompKey${index}`}
                    section={entry.letter}>{
                    //then gather all definitions
                    entry.definitions.map((definition, defIndex)=>{
                        return(
                            <TermsAndDefinitions
                                key={`termCompKey${defIndex}`}
                             termName={definition.term}
                             termDefinition={definition.definition}
                             />
                        )
                    })
                }</DefinitionComponent>
            )
        })
        setDefinitions(arr)
    }, [])
    return (
    <div id="glossaryDefinitionsContainer">
        {...definitions}
    </div>
  )
}

const DefinitionComponent=({section, children})=>{
    return(
        <div className= "definitionSection">
            <div>{section}</div>
            {children}
        </div>
    )
}

const TermsAndDefinitions=({termName, termDefinition})=>{
    return(
        <div className="definitionContainer">
            <div>{termName}</div>
            <p>{termDefinition}</p>
        </div>
    )
}