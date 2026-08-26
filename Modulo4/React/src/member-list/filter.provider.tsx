import React from "react";
import { createContext } from "react";

interface FilterContextModel {
    filter: string;
    setFilter: (search: string) => void;
}

export const FilterContext = createContext<FilterContextModel>({
    filter: "lemoncode",
    setFilter: () => {}
});

export const FilterProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [filter, setFilter] = React.useState("lemoncode");
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};