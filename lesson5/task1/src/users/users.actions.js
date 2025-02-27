export const SET_USERS = 'USERS/SET_USERS';
export const SET_PAGE = 'USERS/SET_PAGE';
export const GO_NEXT = 'USERS/GO_NEXT';
export const GO_PREV = 'USERS/GO_PREV';

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
});

export const goNextPage = () => {
    return {
      type: GO_NEXT,
    };
  };
  
  export const goPrevPage = () => {
    return {
      type: GO_PREV,
    };
}