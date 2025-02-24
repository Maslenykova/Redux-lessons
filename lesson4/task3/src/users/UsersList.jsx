import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { goPrevPage, goNextPage } from './users.actions';
import User from './User';
import { users } from './users';

const ITEMS_PER_PAGE = 3;

const UsersList = ({ currentPage, goNext, goPrev }) => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const paginatedUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="users-list">
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                currentPage={currentPage}
                totalItems={users.length}
                itemsPerPage={ITEMS_PER_PAGE}
            />
            <ul>
                {paginatedUsers.map(user => (
                 <li key={user.id} className="user">
                <User name={user.name} age={user.age} />
             </li>
                ))}
            </ul>
        </div>
    );
};

const mapState = (state) => ({
    users: state.users.usersList,
    currentPage: state.users.currentPage,
});

const mapDispatch = {
    goPrev: goPrevPage,
    goNext: goNextPage,
  };

export default connect(mapState, mapDispatch)(UsersList);