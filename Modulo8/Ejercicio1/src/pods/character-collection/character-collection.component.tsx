import React from "react";
import { CharacterEntityVm } from "./character-collection.vm";
import * as classes from './character-collection.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  characterCollection: CharacterEntityVm[];
}

export const CharacterCollectionComponent: React.FC<Props> = ({ characterCollection }) => {
  const navigate = useNavigate();
  const handleViewDetails = (id: number) => {
    navigate(`/characters/${id}`);
    console.log(id);
  };
  return (
    <div className={classes.root}>
    <ul className={classes.list}>
      {characterCollection.map((character) => (
        <li key={character.id}>
          <div>{character.name}</div>
          <div>{character.status}</div>
          <div>{character.species}</div>
          <div>{character.type}</div>
          <div>{character.gender}</div>
          <button onClick={() => handleViewDetails(character.id)}>View Details</button>
          </li>
        ))}
      </ul>

    </div>
  );
};