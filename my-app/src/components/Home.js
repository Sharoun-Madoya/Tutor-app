import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function Home(){
    
    return(
        <div className="home">
            {/* Search input and button */}
            <form>
                <input type='text' value={prompt} placeholder='All you can ask'/>
                <button type='submit'>Search</button>
            </form>
            {/* Response area for the question */}
            <div>
                <p className='response-area'>
                    {loading? 'loading ...' : response}
                </p>
            </div>
        </div>
    )
}