import {ISimpsonModel} from "../models/ISimpsonModel.ts";
import {FC} from "react";

interface IProps {
    person: ISimpsonModel
}

const CharacterComponent: FC<IProps> = ({person}) => {
    return (
        <div className='text-3xl font-bold underline'>
            {person.name} {person.surname} {person.age} <br/>
            {person.info} <br/>
            <img src={person.photo} alt="photo"/> <br/>
        </div>
    );
};

export default CharacterComponent;