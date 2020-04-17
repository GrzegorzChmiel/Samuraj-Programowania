import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
   return (
      <>
         <h5>Stopka</h5>
         <Route
            path="/"
            exact
            render={(props) => (
               <>
                  <p>
                     Page: <span>{props.match.params.page}</span>
                  </p>
                  <p>
                     Url: <span>{props.match.url}</span>
                  </p>
                  <p>
                     Path: <span>{props.match.path}</span>
                  </p>
               </>
            )}
         ></Route>

         <Route
            path="/:page"
            exact
            render={(props) => (
               <>
                  <p>
                     Page: <span>{props.match.params.page}</span>
                  </p>
                  <p>
                     Url: <span>{props.match.url}</span>
                  </p>
                  <p>
                     Path: <span>{props.match.path}</span>
                  </p>
               </>
            )}
         ></Route>
         <Route
            path="/:page/:name"
            exact
            render={(props) => (
               <>
                  <p>
                     Page: <span>{props.match.params.page}</span>
                  </p>
                  <p>
                     Name: <span>{props.match.params.name}</span>
                  </p>
                  <p>
                     Url: <span>{props.match.url}</span>
                  </p>
                  <p>
                     Path: <span>{props.match.path}</span>
                  </p>
               </>
            )}
         ></Route>
      </>
   );
};

export default Footer;
