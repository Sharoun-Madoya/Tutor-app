import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link exact to="/">Home</Link>
        <Link to= "/student">Student Module</Link>
        <Link to= "/domain">Domain Module</Link>
        <Link to="/tutorial">Tutorials</Link>
        </nav>
    )
}

export default Navbar;