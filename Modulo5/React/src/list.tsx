import React from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "./filter.provider";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface PaginationEntity {
  currentPage: number;
  totalPages: number;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { search, setSearch } = React.useContext(FilterContext);
  const [searchInput, setSearchInput] = React.useState(search);

  const [pagination, setPagination] = React.useState<PaginationEntity>({
    currentPage: 1,
    totalPages: 1,
  });

  const nextPage = () => {
      setPagination({ ...pagination, currentPage: pagination.currentPage + 1 });
  };
  const previousPage = () => {
    if (pagination.currentPage > 0) {
    setPagination({ ...pagination, currentPage: pagination.currentPage - 1 });
    }
  };
  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${search}/members?page=${pagination.currentPage}&per_page=10`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setMembers(json);
      });
  }, [search, pagination.currentPage]);

  return (
    <>
      <h2>Hello from List page</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={() => setSearch(searchInput)}>Search</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        <span className="list-header">Organizations</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
      <span>Page {pagination.currentPage}</span>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
