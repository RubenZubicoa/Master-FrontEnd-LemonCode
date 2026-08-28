import { AppLayout } from '#layouts/app.layout.js';
import { LocationContainer } from '#pods/location/location.container.js';
import React from 'react';

export const LocationScene = () => {
    return (
        <AppLayout>
          <LocationContainer />
        </AppLayout>
      );
};