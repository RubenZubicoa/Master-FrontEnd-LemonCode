import React from 'react';
import { LocationEntityVm } from './location.vm';

interface LocationComponentProps {
    locationCollection: LocationEntityVm[];
}

export const LocationComponent: React.FC<LocationComponentProps> = ({ locationCollection }) => {
    return (
        <div>
            <h1>Location</h1>
            <ul>
                {locationCollection.map((location) => (
                    <li key={location.id}>{location.name}</li>
                ))}
            </ul>
        </div>
    );
};