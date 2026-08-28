import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { mapToCollection } from '#common/mappers/collection.mapper.js';
import { mapCharacterFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = (currentPage: number = 1, search: string = '') => {
    getCharacterCollection(currentPage, search).then((result) =>
      setCharacterCollection(mapToCollection(result, mapCharacterFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};


const getCharacterCollection = async (currentPage: number = 1, search: string = '') => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${search}`);
  const data = await response.json();
  return data.results;
};