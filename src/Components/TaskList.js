import React from "react";
import Task from "./Task";

function createTaskItem(task, makeDone, makeDelete) {
   return <Task key={task.id} task={task} makeDoneHandler={makeDone} makeDeleteHandler={makeDelete}></Task>;
}

const TaskList = props => {
   const activeTasks = props.tasks.filter(task => task.active);
   const activeTaskItems = activeTasks.map(task => createTaskItem(task, props.makeTaskDoneHandler, props.deleteTaskHandler));

   const inactiveTasks = props.tasks.filter(task => !task.active);
   const inactiveTaskItems = inactiveTasks.map(task => createTaskItem(task, props.makeTaskDoneHandler, props.deleteTaskHandler));

   return (
      <>
         <div className="active">
            <h1>
               Zadania do zrobienia <em>({activeTaskItems.length})</em>
            </h1>
            {activeTaskItems.length === 0 && <h3>Brak aktywnych zadań do zrobienia</h3>}
            <div>{activeTaskItems}</div>
         </div>
         <hr></hr>

         <div className="done">
            <h3>
               Zadania zrobione <em>({inactiveTaskItems.length})</em>
            </h3>
            {inactiveTaskItems.length > 5 ? <h4>Widocznych jest tylko 5 ostatnich zadań</h4> : null}
            <div>{inactiveTaskItems.slice(0, 5)}</div>
         </div>
         <hr></hr>
      </>
   );
};

export default TaskList;
