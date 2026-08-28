import { AppLayout } from "#layouts/index.js";
import React from "react";
import { CharacterCollectionContainer } from "#pods/character-collection";

export const CharacterCollectionScene = () => (
    <AppLayout>
        <CharacterCollectionContainer />
    </AppLayout>
);