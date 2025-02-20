export const SET_USERS = 'USERS/SET_USERS';
export const SET_PAGE = 'USERS/SET_PAGE';

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
});