import { Configuration, OpenAIApi } from "openai";
import dotenv from dotenv;

dotenv.config()

const configuration = new Configuration({

});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "user", content: "Hello world"}
    ]
})

console.log(completion.data.choices[0].message)
