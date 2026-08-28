import { CharacterEntityVm } from '#pods/character-collection/character-collection.vm.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './character.styles.js';

interface CharacterComponentProps {
  character: CharacterEntityVm;
}

export const CharacterComponent: React.FC<CharacterComponentProps> = ({ character }) => {
  const navigate = useNavigate();
  if (!character) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.root}>
      <h1 className={classes.characterName}>{character.name}</h1>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
      <p>{character.gender}</p>
      <p>{character.bestSentence}</p>
      <button onClick={() => navigate(`/characters/${character.id}/edit`)} className={classes.button}>Editar</button>
      <button onClick={() => navigate(`/characters`)} className={classes.button}>Volver</button>
    </div>
  );
};