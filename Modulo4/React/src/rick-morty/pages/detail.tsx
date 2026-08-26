import React from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterEntity } from "./list";

export const RickMortyDetailPage: React.FC = () => {
    const { id } = useParams();
    const [character, setCharacter] = React.useState<CharacterEntity | null>(null);

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setCharacter(json);
            });
    }, []);

    return (
        <>
            <div>
                <h2>Hello from Rick Morty Detail page</h2>
                <h3>User Id: {id}</h3>
                <img src={character?.image} />
                <h3>name: {character?.name}</h3>
                <h3>species: {character?.species}</h3>
                <h3>status: {character?.status}</h3>
            </div>
            <Link to="/rick-morty">Back to list page</Link>
        </>
    );
};