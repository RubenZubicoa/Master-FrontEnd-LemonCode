import { PaginationEntity } from "../models/Pagination";

interface PaginationComponentProps {
    pagination: PaginationEntity;
    setPagination: (pagination: PaginationEntity) => void;
  }
  

export const PaginationComponent: React.FC<PaginationComponentProps> = ({ pagination, setPagination }) => {
    const nextPage = () => {
        setPagination({ ...pagination, currentPage: pagination.currentPage + 1 });
    };
    const previousPage = () => {
      if (pagination.currentPage > 0) {
      setPagination({ ...pagination, currentPage: pagination.currentPage - 1 });
      }
    };
  
    return (
      <>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
      <span>Page {pagination.currentPage}</span>
      </>
    );
  };