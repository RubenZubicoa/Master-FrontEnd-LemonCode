import { css } from '@emotion/css';
import React, { useState } from 'react';

interface SearchComponentProps {
    onSearch: (search: string) => void;
}

export const searchStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const searchInput = css`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #1976d2;
    width: 100%;
`;

export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onSearch(search);
    };
    return (
        <div className={searchStyles}>
            <input type="text" placeholder="Search" value={search} onChange={handleSearch} className={searchInput} />
        </div>
    );
};