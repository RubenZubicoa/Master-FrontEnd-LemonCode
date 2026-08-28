import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { mapToCollection } from '#common/mappers/collection.mapper.js';
import { mapCharacterFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapCharacterFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};


const getCharacterCollection = async () => {
  const response = await fetch('http://localhost:3000/api/character');
  const data = await response.json();
  return data.results;
};