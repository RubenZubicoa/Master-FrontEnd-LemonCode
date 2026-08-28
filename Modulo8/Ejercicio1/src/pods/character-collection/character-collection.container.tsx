import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { PaginationComponent } from '#common/components/pagination.component.js';
import { useState } from 'react';
import { SearchComponent } from '#common/components/search.component.js';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  React.useEffect(() => {
    console.log(currentPage, search);
    loadCharacterCollection(currentPage, search);
  }, [currentPage, search]);
  return <>
    <SearchComponent onSearch={setSearch} />
    <CharacterCollectionComponent characterCollection={characterCollection} />
    <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} />
  </>
};
