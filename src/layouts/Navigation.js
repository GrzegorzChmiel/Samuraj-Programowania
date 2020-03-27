import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const menuItems = [
   { itemName: "Start", to: "/", exact: true },
   { itemName: "Produkty", to: "/products", exact: false },
   { itemName: "Kontakt", to: "/contact", exact: false },
   { itemName: "Panel administracyjny", to: "/admin", exact: false }
];

function convertToNavItem(item) {
   return (
      <li key={item.itemName}>
         <NavLink to={item.to} exact={item.exact}>
            {item.itemName}
         </NavLink>
      </li>
   );
}

const Navigation = () => {
   const navItems = menuItems.map(item => convertToNavItem(item));
   return (
      <nav className="main">
         <ul>{navItems}</ul>
      </nav>
   );
};

export default Navigation;
