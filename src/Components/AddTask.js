import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
   state = {
      newTaskName: "",
      plannedDate: "",
      priority: false
   };

   render() {
      return (
         <>
            <div className="form">
               <h1>TODO App</h1>
               <label htmlFor="newTaskName">Nazwa zadania </label>
               <input type="text" placeholder="Nowe zadanie" id="newTaskName" value={this.state.newTaskName}></input>
               <br />
               <label htmlFor="plannedDate">Planowana data wykonania </label>
               <input type="date" id="plannedDate" value={this.state.plannedDate}></input>
               <br />
               <label htmlFor="priority">Priorytet </label>
               <input type="checkbox" id="priority" checked={this.state.priority}></input>
               <br />
               <button>Dodaj zadanie</button>
            </div>
            <hr></hr>
         </>
      );
   }
}

export default AddTask;
