import React from 'react';
import { EpisodeEntityVm } from './episode.vm';

interface EpisodeComponentProps {
    episodeCollection: EpisodeEntityVm[];
}

export const EpisodeComponent: React.FC<EpisodeComponentProps> = ({ episodeCollection }) => {
    return (
        <div>
            <h1>Episode</h1>
            <ul>
                {episodeCollection.map((episode) => (
                    <li key={episode.id}>{episode.name}</li>
                ))}
            </ul>
        </div>
    );
};