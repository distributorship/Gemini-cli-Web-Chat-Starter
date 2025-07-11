// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('promptInput');
    const generateBtn = document.getElementById('generateBtn');
    const geminiResponseDiv = document.getElementById('geminiResponse'); // 确保这个 ID 对应显示 Gemini 回复的 div
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error'); // 获取错误提示 div

    generateBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();

        // 清除之前的错误和回复
        errorDiv.classList.add('hidden'); // 隐藏错误提示
        geminiResponseDiv.innerHTML = ''; // 清空回复区域，使用 innerHTML 以便后续渲染 HTML

        if (!prompt) {
            errorDiv.textContent = '请输入您的问题或指令。';
            errorDiv.classList.remove('hidden'); // 显示错误提示
            return;
        }

        loadingDiv.classList.remove('hidden'); // 显示加载提示
        generateBtn.disabled = true; // 禁用按钮，防止重复点击

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // *** 核心修改部分：使用 marked.js 渲染 Markdown ***
            // 确保 marked.js 库已在 index.html 中正确引入
            if (typeof marked !== 'undefined') { // 检查 marked 是否已加载
                geminiResponseDiv.innerHTML = marked.parse(data.text);
            } else {
                // 如果 marked.js 未加载，则退回到纯文本显示
                console.warn('marked.js is not loaded. Displaying raw Markdown text.');
                geminiResponseDiv.textContent = data.text;
            }
            // *************************************************

        } catch (error) {
            console.error('Error:', error);
            errorDiv.textContent = `请求失败: ${error.message}`;
            errorDiv.classList.remove('hidden'); // 显示错误提示
            geminiResponseDiv.textContent = '未能获取回复。'; // 错误时显示纯文本
        } finally {
            loadingDiv.classList.add('hidden'); // 隐藏加载提示
            generateBtn.disabled = false; // 启用按钮
        }
    });
});