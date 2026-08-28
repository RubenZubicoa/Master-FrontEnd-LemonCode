import React from 'react';
import { CharacterComponent } from './character.component';
import useCharacter from './character.hook';
import { useParams } from 'react-router-dom';

export const CharacterContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { character, loadCharacter } = useCharacter();
  React.useEffect(() => {
    if (id) {
      loadCharacter(Number(id));
    }
  }, []);
  return <CharacterComponent character={character ?? null} />;
};