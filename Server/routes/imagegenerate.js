var express = require("express");
var router = express.Router();

const API_URL = "https://ai.api.nvidia.com/v1/genai/stabilityai/sdxl-turbo";
const API_KEY = "Bearer ";//get API key from NVIDIA site https://build.nvidia.com/stabilityai/sdxl-turbo?run_anywhere=false&api_key=false&nvaie_corporate=false&snippet_tab=node
router.post('/', async function (req, res, next) {
    console.log("Request body received:", req.body);

    const { text_prompts, sampler, steps, seed } = req.body;


    const requestBody = JSON.stringify({
        text_prompts: [{ text: text_prompts[0].text, weight: 1 }],
        sampler,
        steps,
        seed
    });

    console.log("Sending request to NVIDIA API with:", requestBody);

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": API_KEY,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: requestBody
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received from NVIDIA API:", data);

        res.json(data);
    } catch (error) {
        console.error('Failed to fetch from NVIDIA API:', error);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

module.exports = router;