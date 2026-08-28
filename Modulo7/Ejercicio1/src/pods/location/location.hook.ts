import * as React from 'react';
import { LocationEntityVm } from './location.vm';
import { mapToCollection } from '#common/mappers/collection.mapper.js';
import { mapLocationFromApiToVm } from './location.mapper';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>(
    []
  );

  const loadLocationCollection = () => {
    getLocationCollection().then((result) =>
      setLocationCollection(mapToCollection(result, mapLocationFromApiToVm))
    );
  };

  return { locationCollection, loadLocationCollection };
};


const getLocationCollection = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/location`);
  const data = await response.json();
  return data.results;
};