const OPENAI_API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
 
/**
* Custom function to call GPT from a cell.
* @param {string} prompt The input prompt for GPT.
* @param {string} cellValue The content of the cell you want to use in the prompt.
* @param {number} maxTokens The maximum number of tokens for the response. Optional, default is 450.
* @return The generated text from GPT.
* @customfunction
*/
function GPT(prompt, cellValue, maxTokens = 450) {
  // Check if prompt and cell value are provided
  if (!prompt || !cellValue) {
    return "Error: Please provide both a prompt and a cell value.";
  }
 
  // Combine the prompt with the cell value
  const fullPrompt = `${prompt} ${cellValue}`;
  // Call OpenAI API and return the result
  return callOpenAIAPI(fullPrompt, maxTokens);
}
 
/**
* Calls the OpenAI API with the provided prompt and max tokens.
* @param {string} fullPrompt The complete prompt combining the prompt and cell value.
* @param {number} maxTokens The maximum number of tokens for the response.
* @return {string} The response text from the OpenAI API.
*/
function callOpenAIAPI(fullPrompt, maxTokens) {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
 
  // Construct the payload for the API request
  const payload = createPayload(fullPrompt, maxTokens);
 
  // Set up the options for the HTTP POST request
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    payload: JSON.stringify(payload)
  };
 
  try {
    // Make the API request
    const response = UrlFetchApp.fetch(apiUrl, options);
    const json = JSON.parse(response.getContentText());
 
    // Extract and return the generated content
    return json.choices[0].message.content.trim();
  } catch (error) {
    // Return a friendly error message
    return `Error: ${error.message}`;
  }
}
 
/**
* Creates the payload for the OpenAI API request.
* @param {string} fullPrompt The complete prompt combining the prompt and cell value.
* @param {number} maxTokens The maximum number of tokens for the response.
* @return {object} The payload object for the API request.
*/
function createPayload(fullPrompt, maxTokens) {
  return {
    model: 'gpt-4o-mini',  // or whichever model you're using
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: fullPrompt }
    ],
    max_tokens: maxTokens
  };
}
