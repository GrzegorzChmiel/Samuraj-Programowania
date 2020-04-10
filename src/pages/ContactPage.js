import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
   state = { message: "" };

   handleMessageChange(evt) {
      this.setState({ message: evt.target.value });
   }

   handleSubmit(evt) {
      evt.preventDefault();

      this.setState({ message: "" });
   }

   render() {
      return (
         <div className="contact">
            {/*<Prompt
               message={(location) => {
                  console.log(location);
                  return this.state.message.length === 0 ? true : "Czy na pewno opuścić stronę?";
               }}
            ></Prompt>*/}
            <Prompt when={this.state.message.length > 0} message="Czy na pewno opuścić stronę?"></Prompt>
            <form onSubmit={this.handleSubmit.bind(this)}>
               <h3>Napisz wiadomość</h3>
               <textarea value={this.state.message} onChange={this.handleMessageChange.bind(this)} placeholder="Wpisz wiadomość..."></textarea>
               <button>Wyślij</button>
            </form>
         </div>
      );
   }
}

export default ContactPage;
