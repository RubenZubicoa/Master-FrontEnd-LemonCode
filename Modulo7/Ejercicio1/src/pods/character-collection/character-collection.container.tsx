import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { PaginationComponent } from '#common/components/pagination.component.js';
import { useState } from 'react';
import { SearchComponent } from '#common/components/search.component.js';
import * as characterCollectionStyles from './character-collection.styles.js';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  React.useEffect(() => {
    loadCharacterCollection(currentPage, search);
  }, [currentPage, search]);
  return <>
    <SearchComponent onSearch={setSearch} />
    <div className={characterCollectionStyles.root}>
      <CharacterCollectionComponent characterCollection={characterCollection} />
    </div>
    <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} />
  </>
};
