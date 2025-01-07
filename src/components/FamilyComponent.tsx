import {simpsons} from "../models/simpsons.ts";
import CharacterComponent from "./CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div>
            {simpsons.map((person, index) => <CharacterComponent person={person} key={index}/>)}
        </div>
    );
};

export default FamilyComponent;