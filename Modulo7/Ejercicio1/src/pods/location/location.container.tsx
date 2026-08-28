import React, { useEffect } from 'react';
import { LocationComponent } from './location.component';
import { useLocationCollection } from './location.hook';

export const LocationContainer = () => {
    const { locationCollection, loadLocationCollection } = useLocationCollection();
    useEffect(() => {
        loadLocationCollection();
    }, []);
    return (
        <div>
            <LocationComponent locationCollection={locationCollection} />
        </div>
    );
};