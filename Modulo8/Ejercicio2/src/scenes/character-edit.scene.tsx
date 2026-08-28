import React from "react";
import { AppLayout } from "#layouts/index.js";
import { CharacterEditContainer } from "#pods/character-edit/character-edit.container.js";

export const CharacterEditScene: React.FC = () => (
    <AppLayout>
        <CharacterEditContainer />
    </AppLayout>
);