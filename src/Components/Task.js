import React from "react";

const Task = props => {
   const { id, text, date, important, active, finishDate } = props.task;
   const { makeDoneHandler, makeDeleteHandler } = props;
   return (
      <>
         <div>
            <p>
               <strong>{text}</strong> - do <span>{date} </span>
               <button onClickCapture={() => makeDoneHandler(id)}>Oznacz jako wykonane</button>
               <button onClick={() => makeDeleteHandler(id)}>Usuń</button>
            </p>
         </div>
      </>
   );
};

export default Task;
