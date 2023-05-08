import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-oIiKgNSI1wZRj5EjO8m5FMuL", 
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "user", content: "Hello world"}
    ]
})

console.log(completion.data.choices[0].message)
