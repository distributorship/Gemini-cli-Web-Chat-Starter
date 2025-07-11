# Gemini-cli-Web-Chat-Starter
A Simple Web Interface for Google's Gemini-cli API

### Introduction

This project provides a straightforward and easy-to-understand web application that allows users to interact with Google's Gemini API. Built with Node.js and Express.js for the backend, and plain HTML, CSS, and JavaScript for the frontend, it serves as an excellent starting point for anyone looking to integrate generative AI capabilities into a web environment.

The primary goal of this project is to demonstrate a basic setup for sending user prompts to the Gemini API and displaying the AI-generated responses in a user-friendly web interface, complete with Markdown rendering for enhanced readability.

### Features

- **User-Friendly Interface:** A clean and intuitive web UI for submitting prompts and viewing responses.
- **Google Gemini API Integration:** Seamlessly connects to the Gemini API (specifically `gemini-2.5-pro` or `gemini-1.5-pro` for text generation).
- **Markdown Rendering:** Utilizes the `marked.js` library to parse and render Markdown-formatted responses from the Gemini API, ensuring well-structured and readable output.
- **Asynchronous Communication:** Handles API requests asynchronously, providing a smooth user experience with loading indicators.
- **Error Handling:** Basic error display for network issues or API-related problems.
- **Environment Variable Management:** Securely loads the Gemini API Key using `.env` files.
- **CDN Integration:** Leverages Bootstrap CSS from a CDN for basic styling, with Subresource Integrity (SRI) for enhanced security.

### Getting Started

Follow these steps to set up and run the project on your local machine.

#### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** [Download & Install Node.js](https://nodejs.org/en/download/) (includes npm)
- **npm:** Node Package Manager (comes with Node.js)

#### 1\. Obtain a Google Gemini API Key

You need a valid API key to access the Gemini API.

1.  Go to [Google AI Studio](https://aistudio.google.com/).
2.  Log in with your Google account.
3.  Navigate to the "Get API key" or "API access" section.
4.  Create a new API key and copy it. **Ensure you obtain the key from Google AI Studio, not Google Cloud Platform, for direct SDK usage.**

#### 2\. Clone the Repository

```
git clone https://github.com/distributorship/Gemini-cli-Web-Chat-Starter.git
cd Gemini-cli-Web-Chat-Starter
```

#### 3\. Install Dependencies

Install the necessary Node.js packages:

```
mkdir gemini-web-app  
cd gemini-web-app
npm init -y
npm install express @google/generative-ai dotenv
```

#### 4\. Configure Your API Key

Create a `.env` file in the root directory of your project (where `server.js` is located).

```
.env
```

Add your Gemini API Key to this file:

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

**Replace `YOUR_GEMINI_API_KEY_HERE` with the actual API key you obtained from Google AI Studio.**

#### 5\. Run the Application

Start the Node.js server:

```
node server.js
```

You should see a message indicating the server is running, e.g.: `Server running on http://localhost:3000`.

#### 6\. Access the Web Interface

Open your web browser and navigate to:

```
http://localhost:3000
```

You can now type your questions or instructions into the input field and click "Submit" to get responses from the Gemini API.

### Project Structure

```
gemini-cli-web-chat-starter/
├── public/                 # Frontend static files (HTML, CSS, JS)
│   ├── index.html          # Main HTML page
│   ├── style.css           # Custom CSS for styling
│   └── script.js           # Frontend JavaScript logic
├── .env                    # Environment variables (for API key)
├── GEMINI.md               # Your AI prompt
└── server.js               # Backend Node.js server with API endpoint
```

### Technical Details

- **Backend:**
    - **Node.js:** JavaScript runtime environment.
    - **Express.js:** Fast, unopinionated, minimalist web framework for Node.js, used to create the `/api/generate` endpoint.
    - **`dotenv`:** Module to load environment variables from a `.env` file.
    - **`@google/generative-ai`:** The official Google Generative AI SDK for Node.js, used to interact with the Gemini API.
- **Frontend:**
    - **HTML5:** Structure of the web page.
    - **CSS3:** Styling (with basic Bootstrap 5 integration via CDN).
    - **JavaScript:** Handles user interactions, API calls, and dynamic content updates.
    - **`marked.js`:** A powerful Markdown parser and compiler, used to convert Gemini's Markdown responses into HTML for display.
- **Security Considerations:**
    - **API Key Management:** The API key is stored in a `.env` file and accessed server-side, preventing its exposure in client-side code.
    - **Subresource Integrity (SRI):** Used for CDN-hosted Bootstrap CSS to ensure the integrity of the fetched resource against tampering.

### Contributing

Feel free to fork this repository, open issues, or submit pull requests. Any contributions to improve this starter project are welcome!

### License

This project is open-sourced under the MIT License.
