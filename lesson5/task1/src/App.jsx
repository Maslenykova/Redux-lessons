import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './users/UsersList';
import store from './store';
import { setUsers } from './users/users.actions';
import { users } from './users/users';

  
const App = () => {
    return (
        <Provider store={store}>
            <UsersList />
        </Provider>
    );
};

store.dispatch(setUsers(users));

export default App;