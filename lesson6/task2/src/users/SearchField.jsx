import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as usersActions from './users.actions';
import { getUserData } from './users.geteway';
import { fetchUserData} from './users.actions';


class SearchField  extends Component{
    state = {
        userName: ''
    };

    onChange = event =>{
        this.setState({userName: event.target.value});
    };

    handleUserSearch = () => {
       this.props.showSpinner();
       getUserData(this.state.userName).then(userData =>{
                    this.props.userDataRecieved(userData);
                   })
    };

    render(){
        return(
            <div className="name-form">
            <input type="text"
            className="name-form__input"
            onChange={this.onChange}
            value={this.state.userName}/>
            <button className="name-form__btn btn" onClick={this.handleUserSearch}>Show</button>
          </div>
        )
    }
   
};
SearchField.propTypes = {
    showSpinner: PropTypes.func.isRequired,
}
const mapDispatch = {
    showSpinner: usersActions.showSpinner,
    userDataRecieved: usersActions.userDataRecieved,
    // fetchUserData: usersActions.fetchUserData,
}
export default connect(null, mapDispatch)(SearchField);