import React from "react";
import Task from "./Task";

function createTaskItem(task, makeDone, makeDelete) {
   return <Task key={task.id} task={task} makeDoneHandler={makeDone} makeDeleteHandler={makeDelete}></Task>;
}

const TaskList = props => {
   const TaskItems = props.tasks.map(task => createTaskItem(task, props.makeTaskDoneHandler, props.deleteTaskHandler));
   return (
      <>
         <div className="active">
            <h1>Zadania do zrobienia</h1>
            <div>{TaskItems}</div>
         </div>
         <hr></hr>

         <div className="done">
            <h3>Zadania zrobione</h3>
            <div>{TaskItems}</div>
         </div>
         <hr></hr>
      </>
   );
};

export default TaskList;
