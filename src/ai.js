import { HfInference } from '@huggingface/inference';



const hf = new HfInference(import.meta.env.VITE_HF_API_KEY);


const SYSTEM_PROMPT = "You are an AI assistant that provides recipes based on given ingredients.";


export default async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
    // try {
    //     const response = await hf.chatCompletion({
    //         model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    //         messages: [
    //             { role: "system", content: SYSTEM_PROMPT },
    //             { role: "user", content: `I have ${ingredientsString}. Give me a recipe!` },
    //         ],
    //         max_tokens: 1024,
    //     });
    
    //     console.log("Full API Response:", response);  // Check full response
    //     console.log("Choices:", response.choices);  // Check choices array
    
    //     if (!response.choices || response.choices.length === 0) {
    //         throw new Error("No choices found in response.");
    //     }
    
    //     const reply = response.choices[0].message?.content || "No reply received.";
    //     console.log("Extracted Reply:", reply);
        
    //     return reply;
    // } catch (err) {
    //     console.error("API Error:", err.message);
    //     return "Sorry, I couldn't generate a response. Please try again.";
    // }
    
    
}
