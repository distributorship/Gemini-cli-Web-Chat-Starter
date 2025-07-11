// server.js
require('dotenv').config(); // 加载 .env 文件中的环境变量
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000; // 服务器端口，默认为 3000

// 获取 Gemini API Key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY is not set in .env file.');
    process.exit(1); // 退出程序
}

// 初始化 Gemini 客户端
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' }); // 使用 gemini-pro 模型

// 中间件：解析 JSON 请求体
app.use(express.json());

// 中间件：提供静态文件服务 (将 public 目录下的文件暴露给浏览器)
app.use(express.static(path.join(__dirname, 'public')));

// API 路由：处理 Gemini 文本生成请求
app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required.' });
    }

    try {
        console.log(`Received prompt: "${prompt}"`);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(`Gemini response: "${text}"`);
        res.json({ text });
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        res.status(500).json({ error: 'Failed to generate content from Gemini API.' });
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Open your browser to http://localhost:${port}`);
});
