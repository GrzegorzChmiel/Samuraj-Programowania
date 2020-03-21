import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Home = () => {
   return <h3>Strona główna</h3>;
};

const News = () => {
   return <h3>Aktualności</h3>;
};

const Contact = () => {
   return <h3>Kontakt</h3>;
};

class App extends React.Component {
   render() {
      return (
         <Router>
            <div className="App">
               <header className="App-header">
                  <nav>
                     <ul>
                        <li>
                           <Link to="/">Strona główna</Link>
                        </li>
                        <li>
                           <Link to="/News">Aktualności</Link>
                        </li>
                        <li>
                           <Link to="/Contact">Kontakt</Link>
                        </li>
                     </ul>
                  </nav>
               </header>
               <section>
                  <Route path="/News" component={News}></Route>
                  <Route path="/Contact" component={Contact}></Route>
                  <Route exact path="/" component={Home}></Route>
               </section>
            </div>
         </Router>
      );
   }
}

export default App;
