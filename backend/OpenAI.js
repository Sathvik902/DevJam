const axios = require('axios');

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.openai.com/v1/engine/ENGINE_ID/completions';

exports.getResp = async (prompt) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };

  const data = {
    'prompt': prompt,
    'max_tokens': 100,
    'temperature': 0.5,
    'stop': '\n',
  };

  try {
    const response = await axios.post(API_URL, data, { headers: headers });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
  }
}