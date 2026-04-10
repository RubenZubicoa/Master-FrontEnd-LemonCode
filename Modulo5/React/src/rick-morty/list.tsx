import React from "react";
import { PaginationEntity } from "../member-list/models/Pagination";
import { PaginationComponent } from "../shared/components/pagination";
import { RickMortyListComponent } from "./components/rick-morty-list";

export interface CharacterEntity {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

export const RickMortyListPage: React.FC = () => {
    const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
    const [search, setSearch] = React.useState<string>("");
    const [searchInput, setSearchInput] = React.useState(search);
    const [pagination, setPagination] = React.useState<PaginationEntity>({
        currentPage: 1,
        totalPages: 1,
    });

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${search}&page=${pagination.currentPage}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json);
                setCharacters(json.results);
            })
    }, [pagination.currentPage, search]);

    return (
        <>
            <h1>List Page</h1>
            <div>
                <input type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button onClick={() => setSearch(searchInput)}>Search</button>
            </div>
            <RickMortyListComponent characters={characters} />
            <PaginationComponent pagination={pagination} setPagination={setPagination} />
        </>
    );
};