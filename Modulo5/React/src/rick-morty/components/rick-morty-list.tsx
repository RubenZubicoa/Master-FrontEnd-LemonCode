import React from "react";
import { CharacterEntity } from "../list";

interface RickMortyListComponentProps {
    characters: CharacterEntity[];
}
export const RickMortyListComponent: React.FC<RickMortyListComponentProps> = ({ characters }) => {
    return (
        <div className="list-user-list-container">
        <span className="list-header">Image</span>
        <span className="list-header">Name</span>
        <span className="list-header">Status</span>
        {characters?.map((character) => (
            <React.Fragment key={character.id}>
                <img src={character.image} />
                <span>{character.name}</span>
                <span>{character.status}</span>
            </React.Fragment>
        ))}

    </div>
    );
};