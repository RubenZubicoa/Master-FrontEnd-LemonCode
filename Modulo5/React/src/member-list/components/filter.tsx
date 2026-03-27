import React from "react";
import { FilterContext } from "../filter.provider";

export const FilterComponent: React.FC = () => {
    const { filter: search, setFilter: setSearch } = React.useContext(FilterContext);
    const [searchInput, setSearchInput] = React.useState(search);
    return (
      <div>
        <input type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={() => setSearch(searchInput)}>Search</button>
      </div>
    );
  };