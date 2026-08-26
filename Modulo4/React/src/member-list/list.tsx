import React from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "./filter.provider";
import { FilterComponent } from "./components/filter";
import { PaginationComponent } from "../shared/components/pagination";
import { MemberListComponent } from "./components/member-list";
import { MemberEntity } from "./models/Member";
import { PaginationEntity } from "./models/Pagination";


export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { filter: search } = React.useContext(FilterContext);
  const [pagination, setPagination] = React.useState<PaginationEntity>({
    currentPage: 1,
    totalPages: 1,
  });

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
      <FilterComponent />
      <MemberListComponent members={members} />
      <PaginationComponent pagination={pagination} setPagination={setPagination} />
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
