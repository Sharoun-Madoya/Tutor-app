const express = require ("express");
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser")
const{configuration, OpenAIApi, Configuration}= require("openai");

// setting up the server 
const app = express()

app.use(bodyParser.json());
app.use(cors())

// setting up the ChartGpt endpoint 
const apiKey =  " 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"
const configuration = new Configuration({
    apiKey: apiKey
});

    const openai = new OpenAIApi(configuration);

    app.post("/completions", async(req, res)=>{
        const {prompt} = req.body;
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 4097,
        });
        res.send(completion.data.choices[0].text);
        });

        const port = v1;

        app.listen(port, ()=> {
            console.log(`Server listening on port ${port}`)
            console.log(`https://api.openai.com/v1:${port}`);
        })