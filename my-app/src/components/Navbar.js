import React from 'react';
import DomainModule from './Domain';
import StudentModule from './sudent';
import TutorialModule from './tutorial';

function Navbar (){
    return(
        <div className="container">
            <DomainModule/>
            <StudentModule />
            <TutorialModule />
        </div>
    )
}