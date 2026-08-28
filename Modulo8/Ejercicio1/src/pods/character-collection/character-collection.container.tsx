import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { PaginationComponent } from '#common/components/pagination.component.js';
import { useState } from 'react';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [currentPage, setCurrentPage] = useState(1);
  React.useEffect(() => {
    loadCharacterCollection(currentPage);
  }, [currentPage]);
  return <>
    <CharacterCollectionComponent characterCollection={characterCollection} />
    <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} />
  </>
};
