import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { setPage } from './users.actions';
import User from './User';

const ITEMS_PER_PAGE = 3;

const UsersList = ({ users, currentPage, setPage }) => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const paginatedUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goNext = () => setPage(currentPage + 1);
    const goPrev = () => setPage(currentPage - 1);

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

const mapStateToProps = (state) => ({
    users: state.users.usersList,
    currentPage: state.users.currentPage,
});

const mapDispatchToProps = {
    setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);