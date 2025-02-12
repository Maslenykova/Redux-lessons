import React from 'react';
import Header from './Header';
import {UserContext} from './userContext';

class App extends React.Component{
    state = {
        userData: {
            name:'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001'
        }
    }
   
    render(){
        return (
            <UserContext.Provider value={this.state.userData}>
                <div className="page">
                    <Header />
                </div>
            </UserContext.Provider>
        );
    }
};

export default App;