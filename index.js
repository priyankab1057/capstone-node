import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;

const app = express();
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/any');
        const jokeData = response.data;

        // Render the index.ejs template and pass the joke data
        res.render('index.ejs', {
            title: 'My EJS Page',
            joke: jokeData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on the port no: ${ port }`);
})