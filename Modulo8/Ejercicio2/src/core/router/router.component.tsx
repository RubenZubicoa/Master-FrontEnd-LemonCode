import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
  CharacterScene,
} from '#scenes';
import { CharacterEditScene } from '#scenes/character-edit.scene.js';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.viewCharacter}
          element={<CharacterScene />}
        />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
        <Route
          path={switchRoutes.editCharacter}
          element={<CharacterEditScene />}
        />
      </Routes>
    </HashRouter>
  );
};
