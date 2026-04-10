import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./member-list/list";
import { DetailPage } from "./detail";
import { FilterProvider } from "./member-list/filter.provider";
import { RickMortyListPage } from "./rick-morty/list";

export const App = () => {
  return (
    <FilterProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/rick-morty" element={<RickMortyListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </FilterProvider>
  );
};