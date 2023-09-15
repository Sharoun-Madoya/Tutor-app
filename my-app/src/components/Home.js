import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function Home(){
    const [prompt, setPrompt] = useState('');
    const [response, setResponse]=useState('');
    const [loading, setLoading]= useState(false)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true);

            // Code to fetch data and communicate with the AI
    axios
    .post(
      'https://api.openai.com/v1/completions',
      { 
        model: 'text-davinci-003',
        prompt },
      {
        headers: {
          Authorization: 'Bearer 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', // Replace with your actual API key
        },
      }
    )
    .then((res) => {
      setResponse(res.data.choices[0].text);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.response.data);
      setLoading(false);
    });
    }

    return(
        <div className="home">
            {/* Search input and button */}
            <form className='wrapper' onSubmit={handleSubmit}>
                <input type='text' value={prompt} placeholder='All you can ask'
                onChange={(event)=>setPrompt(event.target.value)}/>
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

export default Home;