import { createSelector } from 'reselect';

export const tasksListSelector = state => state.tasks.tasksList;
export const sortedTaslsListSelector = createSelector(
    [tasksListSelector],
    (tasksList) =>{
        return tasksList.slice().sort((a,b) => a.done - b.done)
    } 
) 