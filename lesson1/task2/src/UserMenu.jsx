import React from 'react';
import { UserContext} from './userContext';
 
class UserMenu extends React.Component{
    render(){
        const { name, avatar_url } = this.context;
        return(
            <div className="menu">
           <span 
           className="menu__greeting">Hello, {name || "Guest"}</span>
          {avatar_url && <img alt="User Avatar" src={avatar_url} className="menu__avatar" />}
    </div>
   
        )
    }
};
UserMenu.contextType = UserContext;

export default UserMenu;