 import { TASKS_LIST_RECIEVED } from './tasks.actions';

const initialState = {
    tasksList: []
}

const TasksReducer = (state = initialState, action) =>{
    switch(action.type){
        case TASKS_LIST_RECIEVED:
           return{
            ...state,
            tasksList: action.payload.tasksList
           }
           default:
            return state
    };
}

export default TasksReducer;