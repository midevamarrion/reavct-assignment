import React from 'react';
import'./style.css';
const Navigationbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/addproduct">Add products</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigationbar;
