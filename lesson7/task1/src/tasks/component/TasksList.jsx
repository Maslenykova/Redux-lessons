import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from './Task'
import CreateTaskInput from './CreateTaskInput';
import * as taskActions from '../tasks.actions';
import { sortedTaslsListSelector } from '../tasks.selectors';



class TasksList extends Component{
     componentDidMount(){
        this.props.getTaskList();
    }
    render(){
        return(
            <main className="todo-list">
                 <CreateTaskInput onCreate={this.props.createTask}/>
                    <ul className="list">
                {this.props.tasks.map(task=>(
                <Task key={task.id} {...task}
                onDelete={this.props.deleteTask}
                onChange={this.props.updateTasks}/>
                ))}
      
            </ul>
             </main>
          )
    }
   
}

TasksList.propTypes = {
    getTaskList: PropTypes.func.isRequired,
    updateTasks: PropTypes.func.isRequired,
    deleteTask:  PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape()),
}

const mapDispatch = {
    getTaskList: taskActions.getTaskList,
    updateTasks: taskActions.updateTasks,
    deleteTask:taskActions.deleteTask,
    createTask: taskActions.createTask,
}

const mapState = state =>{
 return{
    tasks: sortedTaslsListSelector(state)
 }
}

export default connect(mapState, mapDispatch)(TasksList);