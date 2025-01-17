# MarioAI Fashion Site

Welcome to MarioAI Fashion, an interactive e-commerce platform that leverages Generative AI to revolutionize fashion visualization and personalization. Our platform bridges traditional shopping with modern expectations, enhancing the consumer experience and driving sales.

## Features

- **Generative AI for Fashion**: Utilizes NVIDIA's text-to-image API to generate custom fashion designs based on user instructions.
- **Interactive E-commerce**: Offers a seamless shopping experience with personalized recommendations.
- **Technology Integration**: Built with React, CSS for styling, Node.js, Express for server-side operations, and Redux Toolkit for state management.

## Deployment

The MarioAI Fashion site is deployed on Vercel and accessible at [https://mario-fashion-site-client.vercel.app/](https://mario-fashion-site-client.vercel.app/).

## NVIDIA API Integration

To ensure continuous image generation functionality:

1. Obtain an API key from [NVIDIA's SDXL Turbo](https://build.nvidia.com/stabilityai/sdxl-turbo?snippet_tab=Node) platform.
2. Replace the existing API key in `server/routes/imagegenerate.js` with your new key.

## Getting Started

To run the MarioAI Fashion site locally:

```bash
# Clone the repository
git clone https://github.com/Kumara-Gurubaran-M/Mario-Fashion-Site

# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the React development server
npm start
```

For server setup, follow similar steps in the `server` directory.

## Contributing

We welcome contributions to enhance MarioAI Fashion! Please fork the repository and submit pull requests for any improvements.
