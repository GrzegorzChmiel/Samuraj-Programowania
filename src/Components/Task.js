import React from "react";

const Task = props => {
   const { id, text, date, important, active, finishDate } = props.task;
   const { makeDoneHandler, makeDeleteHandler } = props;

   const importantStyle = { color: "red" };
   const finishDateString = new Date(finishDate).toLocaleDateString();

   const activePart = (
      <div>
         <p>
            <font style={important ? importantStyle : null}>
               <strong>{text}</strong>
            </font>{" "}
            - do <span>{date} </span>
            <button onClickCapture={() => makeDoneHandler(id)}>Oznacz jako wykonane</button>
            <button onClick={() => makeDeleteHandler(id)}>Usuń</button>
         </p>
      </div>
   );
   const inactivePart = (
      <div>
         <p>
            <strong>{text}</strong> - (planowana data wykonania: {date})
            <br />- rzeczywista data wykonania: {finishDateString}
         </p>
      </div>
   );
   let renderPart;
   if (active) {
      renderPart = activePart;
   } else {
      renderPart = inactivePart;
   }

   return <>{renderPart}</>;
};

export default Task;
