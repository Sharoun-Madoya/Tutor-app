import React from 'react';
import DomainModule from './Domain';
import StudentModule from './sudent';
import TutorialModule from './tutorial';

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