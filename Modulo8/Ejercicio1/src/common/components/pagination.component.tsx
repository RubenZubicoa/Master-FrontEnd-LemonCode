import { css } from '@emotion/css';
import React, { useState } from 'react';


interface PaginationComponentProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export const paginationStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

export const paginationButton = css`
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #1976d2;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const paginationSpan = css`
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #1976d2;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, setCurrentPage }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };
    return (
        <div className={paginationStyles}>
            <button onClick={handlePrevious} className={paginationButton}>Previous</button>
            <span className={paginationSpan}>{currentPage}</span>
            <button onClick={handleNext} className={paginationButton}>Next</button>
        </div>
    );
};