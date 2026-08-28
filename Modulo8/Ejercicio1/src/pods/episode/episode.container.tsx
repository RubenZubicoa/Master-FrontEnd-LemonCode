import React, { useEffect } from 'react';
import { EpisodeComponent } from './episode.component';
import { useEpisodeCollection } from './episode.hook';

export const EpisodeContainer = () => {
    const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();
    useEffect(() => {
        loadEpisodeCollection();
    }, []);
    return (
        <div>
            <EpisodeComponent episodeCollection={episodeCollection} />
        </div>
    );  
};