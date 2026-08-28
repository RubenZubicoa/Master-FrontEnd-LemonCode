import { CharacterEntityVm } from '#pods/character-collection/character-collection.vm.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CharacterComponentProps {
  character: CharacterEntityVm;
}

export const CharacterComponent: React.FC<CharacterComponentProps> = ({ character }) => {
  const navigate = useNavigate();
  if (!character) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
      <p>{character.gender}</p>
      <p>{character.bestSentence}</p>
      <button onClick={() => navigate(`/characters/${character.id}/edit`)}>Editar</button>
    </div>
  );
};