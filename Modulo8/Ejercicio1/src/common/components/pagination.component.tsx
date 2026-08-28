import React, { useState } from 'react';

interface PaginationComponentProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

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
        <div>
            <button onClick={handlePrevious}>Previous</button>
            <span>{currentPage}</span>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};