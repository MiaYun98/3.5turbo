import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const { message } = req.body;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "user", content: `${message}` }
        ]
    })

    res.json({
        completion: completion.data.choices[0].message
    })
});

app.listen(port, () => {
    console.log(`Exaple app listing at http://localhost:${port}`);
});
