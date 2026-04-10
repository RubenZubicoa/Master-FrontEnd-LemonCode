import React from "react";
import { PaginationEntity } from "../member-list/models/Pagination";
import { PaginationComponent } from "../shared/components/pagination";
import { RickMortyListComponent } from "./components/rick-morty-list";
import { useDebounce } from "use-debounce";

export interface CharacterEntity {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

export const RickMortyListPage: React.FC = () => {
    const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
    const [searchInput, setSearchInput] = React.useState("");
    const [debouncedSearch] = useDebounce(searchInput, 500);
    const [pagination, setPagination] = React.useState<PaginationEntity>({
        currentPage: 1,
        totalPages: 1,
    });

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${debouncedSearch}&page=${pagination.currentPage}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json);
                setCharacters(json.results);
            })
    }, [pagination.currentPage, debouncedSearch]);

    return (
        <>
            <h1>List Page</h1>
            <div style={{ marginBottom: "10px" }}>
                <input type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <RickMortyListComponent characters={characters} />
            <PaginationComponent pagination={pagination} setPagination={setPagination} />
        </>
    );
};