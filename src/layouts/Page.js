import React from "react";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import { Route, Switch } from "react-router-dom";

const Page = () => {
   return (
      <>
         <Switch>
            <Route exact path="/" component={HomePage} a></Route>
            <Route path="/products" component={ProductListPage}></Route>
            <Route path="/product/:name" component={ProductPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            <Route path="/admin" component={AdminPage}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route component={ErrorPage}></Route>
         </Switch>
      </>
   );
};

export default Page;
