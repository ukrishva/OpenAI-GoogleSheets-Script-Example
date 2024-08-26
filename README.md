
# OpenAI-GoogleSheets-Script-Example

This repository provides a Google Apps Script example for integrating OpenAI's GPT API with Google Sheets. The script allows users to call GPT models directly from Google Sheets using a custom function, enabling powerful text generation and AI-driven insights within your spreadsheets.

## Overview

This script is designed to be used as a custom function within Google Sheets. By integrating OpenAI's GPT API, you can generate text, automate responses, and enhance your Google Sheets workflows with AI-powered text generation.

## Features

- **Custom Function for Google Sheets**: Use the `GPT` function directly in your Google Sheets to generate text.
- **Seamless OpenAI API Integration**: Fetches responses from OpenAI's GPT models based on provided prompts.
- **Flexible and Configurable**: Supports dynamic prompts and adjustable token limits.
- **Error Handling**: Provides basic error handling to ensure smooth operation.

## Getting Started

### Prerequisites

- A Google account with access to Google Sheets.
- An OpenAI API key. You can get an API key by signing up at [OpenAI](https://platform.openai.com/).

### Installation

1. **Open Google Sheets**:
   - Go to [Google Sheets](https://sheets.google.com).

2. **Open the Script Editor**:
   - Click on **Extensions > Apps Script**.

3. **Copy and Paste the Script**:
   - Copy the contents of `GoogleSheetsAppScriptExample.js` from this repository.
   - Paste it into the script editor in Google Sheets.

4. **Replace the API Key**:
   - Replace `'YOUR_API_KEY'` with your actual OpenAI API key in the script.

5. **Save the Script**:
   - Save the script by clicking on the disk icon or pressing `Ctrl + S`.

6. **Close the Script Editor**:
   - Close the Apps Script editor and return to your Google Sheet.

## Usage

### Using the GPT Function

In any cell of your Google Sheet, use the formula:

```javascript
=GPT("Your prompt here", A1, 100)
```

- Replace `"Your prompt here"` with your prompt text.
- Replace `A1` with the reference to the cell containing the content you want to include in the prompt.
- The third parameter `100` is optional and specifies the maximum number of tokens for the response.

### Example

To generate a creative writing prompt based on the content in cell `B2`, you could use:

```javascript
=GPT("Write a short story about", B2, 200)
```

## Examples

1. **Generate Summaries**:
   ```javascript
   =GPT("Summarize the following text:", A1)
   ```

2. **Brainstorm Ideas**:
   ```javascript
   =GPT("Generate ideas for a marketing campaign about", B2)
   ```

3. **Translate Text**:
   ```javascript
   =GPT("Translate the following sentence to French:", C3)
   ```

## Requirements
- **Google Sheets**: The script is designed to run within Google Sheets using Google Apps Script.
- **OpenAI API Key**: Required to make requests to OpenAI's GPT API.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

## Acknowledgments
This script utilizes the OpenAI GPT API to provide AI capabilities directly within Google Sheets.
