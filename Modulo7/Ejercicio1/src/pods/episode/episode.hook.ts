import * as React from 'react';
import { EpisodeEntityVm } from './episode.vm';
import { mapToCollection } from '#common/mappers/collection.mapper.js';
import { mapEpisodeFromApiToVm } from './episode.mapper';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeEntityVm[]>(
    []
  );

  const loadEpisodeCollection = () => {
    getEpisodeCollection().then((result) =>
        setEpisodeCollection(mapToCollection(result, mapEpisodeFromApiToVm))
    );
  };

  return { episodeCollection, loadEpisodeCollection };
};


const getEpisodeCollection = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode`);
  const data = await response.json();
  return data.results;
};