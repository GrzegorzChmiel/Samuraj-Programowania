import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
   state = {
      tasks: [
         { id: 0, text: "Zagrać wreszcie w Wiedźmina 3", date: "2020-02-15", important: false, active: true, finishDate: null },
         { id: 1, text: "Zrobić dobry uczynek", date: "2020-11-12", important: false, active: true, finishDate: null },
         { id: 2, text: "Pomalować dom po sylwestrze", date: "2020-09-11", important: false, active: true, finishDate: null },
         { id: 3, text: "Przytyć 20 kilogramów", date: "2020-05-20", important: false, active: true, finishDate: null },
         { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: "2020-11-12", important: false, active: true, finishDate: null },
         { id: 5, text: "Jeszcze raz pomalować dom", date: "2020-09-11", important: false, active: true, finishDate: null },
         { id: 6, text: "Fryzjer!!!", date: "2020-05-20", important: false, active: true, finishDate: null },
         { id: 7, text: "Nie odbierać poleconego od komornika", date: "2020-11-12", important: false, active: true, finishDate: null },
         { id: 8, text: "Kupić 2 butelki litrowe", date: "2020-09-11", important: false, active: true, finishDate: null }
      ]
   };

   makeTaskDone = taskId => {
      const tasksCopy = [...this.state.tasks];
      const taskDone = tasksCopy.find(task => task.id === taskId);
      if (taskDone != null) {
         taskDone.active = false;
         taskDone.finishDate = new Date().getTime();
      }

      this.setState({
         tasks: tasksCopy
      });
   };

   deleteTask = taskId => {
      const tasksCopy = [...this.state.tasks];
      const taskToDeleteId = tasksCopy.findIndex(task => task.id === taskId);
      if (taskToDeleteId !== -1) {
         tasksCopy.splice(taskToDeleteId, 1);
      }

      this.setState({
         tasks: tasksCopy
      });
   };

   render() {
      return (
         <>
            <div className="App">
               <AddTask></AddTask>
               <TaskList tasks={this.state.tasks} makeTaskDoneHandler={this.makeTaskDone} deleteTaskHandler={this.deleteTask}></TaskList>
            </div>
         </>
      );
   }
}

export default App;
