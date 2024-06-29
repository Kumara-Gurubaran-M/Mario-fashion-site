// var express = require("express");
// var router = express.Router();

// const API_URL = "https://ai.api.nvidia.com/v1/genai/stabilityai/sdxl-turbo";
// const API_KEY = "Bearer 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";
// console.log("server run")
// router.post('/', async function (req, res, next) {
//     console.log("Request body received:", req.body);  // Log the request body to see what is received from the client

//     const { text_prompts, sampler, steps, seed } = req.body;

//     // Create a JSON object for the request body for NVIDIA API
//     const requestBody = JSON.stringify({
//         text_prompts: [{ text: text_prompts[0].text, weight: 1 }],
//         sampler,
//         steps,
//         seed
//     });

//     console.log("Sending request to NVIDIA API with:", requestBody);  // Log what will be sent to the NVIDIA API

//     try {
//         const fetch = (await import('node-fetch')).default;
//         const response = await fetch(API_URL, {
//             method: "POST",
//             headers: {
//                 "Authorization": API_KEY,
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: requestBody
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Received from NVIDIA API:", data);  // Log the data received from the NVIDIA API

//         res.json(data);
//     } catch (error) {
//         console.error('Failed to fetch from NVIDIA API:', error);
//         res.status(500).json({ error: "Failed to fetch image" });
//     }
// });

// module.exports = router;


var express = require("express");
var router = express.Router();

const API_URL = "https://ai.api.nvidia.com/v1/genai/stabilityai/sdxl-turbo";
const API_KEY = "Bearer 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";
console.log("server run");

router.post('/', async function (req, res, next) {
    console.log("Request body received:", req.body);  // Log the request body to see what is received from the client

    const { text_prompts, sampler, steps, seed } = req.body;

    // Create a JSON object for the request body for NVIDIA API
    const requestBody = JSON.stringify({
        text_prompts: [{ text: text_prompts[0].text, weight: 1 }],
        sampler,
        steps,
        seed
    });

    console.log("Sending request to NVIDIA API with:", requestBody);  // Log what will be sent to the NVIDIA API

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
        console.log("Received from NVIDIA API:", data);  // Log the data received from the NVIDIA API

        res.json(data);
    } catch (error) {
        console.error('Failed to fetch from NVIDIA API:', error);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

module.exports = router;
