import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
   return (
      <div>
         <Route
            render={() => {
               return permission ? <h3>Panel administracyjny</h3> : <Redirect to="/login"></Redirect>;
            }}
         ></Route>
      </div>
   );
};

export default AdminPage;
