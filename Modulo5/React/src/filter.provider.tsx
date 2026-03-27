import React from "react";
import { createContext } from "react";

interface FilterContextModel {
    search: string;
    setSearch: (search: string) => void;
}

export const FilterContext = createContext<FilterContextModel>({
    search: "lemoncode",
    setSearch: () => {}
});

export const FilterProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [search, setSearch] = React.useState("lemoncode");
    return (
        <FilterContext.Provider value={{ search, setSearch }}>
            {children}
        </FilterContext.Provider>
    );
};