import React from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

class App extends React.Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <header className="App-header">
                  <nav>
                     <ul>
                        <li>
                           <Link to="/">Strona główna</Link>
                        </li>
                        <li>
                           <Link to="/News">News</Link>
                        </li>
                        <li>
                           <Link to="/Contact">Kontakt</Link>
                        </li>
                     </ul>
                  </nav>
               </header>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
