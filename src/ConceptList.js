import ConceptItem from "./ConceptItem";

const ConceptList = (props) =>{
    return (
        <ul id="concepts">
            <ConceptItem image={props.concepts[0].image} title={props.concepts[0].title} description={props.concepts[0].decription}></ConceptItem>
            <ConceptItem image={props.concepts[1].image} title={props.concepts[1].title} description={props.concepts[1].decription}></ConceptItem>
            <ConceptItem image={props.concepts[2].image} title={props.concepts[2].title} description={props.concepts[2].decription}></ConceptItem>
        </ul>
    )
}

export default ConceptList;