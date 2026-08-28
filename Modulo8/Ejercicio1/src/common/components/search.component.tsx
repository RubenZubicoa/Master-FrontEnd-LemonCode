import React, { useState } from 'react';

interface SearchComponentProps {
    onSearch: (search: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onSearch(search);
    };
    return (
        <div>
            <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
        </div>
    );
};