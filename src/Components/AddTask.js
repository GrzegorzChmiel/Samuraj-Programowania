import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
   state = {
      newTaskName: "",
      plannedDate: "",
      priority: false
   };

   handleNewTaskName = evt => {
      const newState = {
         newTaskName: evt.target.value
      };

      this.setState(newState);
   };

   handlePlannedDate = evt => {
      const newState = {
         plannedDate: evt.target.value
      };

      this.setState(newState);
   };

   handlePriority = evt => {
      const newState = {
         priority: evt.target.checked
      };

      this.setState(newState);
   };

   handleAdd = () => {
      const newTask = {
         text: this.state.newTaskName,
         date: this.state.plannedDate,
         important: this.state.priority
      };

      const addResult = this.props.addTask(newTask);

      if (addResult) {
         const resetState = {
            newTaskName: "",
            plannedDate: "",
            priority: false
         };
         this.setState(prevState => {
            return resetState;
         });
      }
   };

   render() {
      return (
         <>
            <div className="form">
               <h1>TODO App</h1>
               <label htmlFor="newTaskName">Nazwa zadania </label>
               <input type="text" placeholder="Nowe zadanie" id="newTaskName" value={this.state.newTaskName} onChange={this.handleNewTaskName}></input>
               <br />
               <label htmlFor="plannedDate">Planowana data wykonania </label>
               <input type="date" id="plannedDate" value={this.state.plannedDate} onChange={this.handlePlannedDate}></input>
               <br />
               <label htmlFor="priority">Priorytet </label>
               <input type="checkbox" id="priority" checked={this.state.priority} onChange={this.handlePriority}></input>
               <br />
               <button onClick={this.handleAdd}>Dodaj zadanie</button>
            </div>
            <hr></hr>
         </>
      );
   }
}

export default AddTask;
