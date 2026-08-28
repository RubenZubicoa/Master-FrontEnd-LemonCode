import React from 'react';
import { EpisodeContainer } from '#pods/episode/episode.container';
import { AppLayout } from '#layouts/app.layout.js';

export const EpisodeScene = () => {
    return (
        <AppLayout>
          <EpisodeContainer />
        </AppLayout>
      );
};