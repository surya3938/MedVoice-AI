# MedVoiceAI

MedVoiceAI is a voice-enabled medical assistant web application that allows users to interact with a generative AI model via voice input. It uses Google’s Gemini (Generative AI) model to respond to queries in real-time.

## 🧩 Project Structure

```
Major`/
├── be/                    # Backend (Flask)
│   └── server.py
├── fe/                    # Frontend (React + Vite)
│   └── medvoiceAi/
│       ├── index.html
│       ├── package.json
│       └── ...
```

## 🚀 Features

- 🎤 Speech-to-text interaction using React Speech Recognition
- 🤖 Integration with Google Gemini AI via Flask backend
- 🌐 CORS-enabled backend for cross-origin requests
- 🧪 Modular frontend with TailwindCSS & Heroicons
- 📦 Vite for fast frontend development and build process

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v18+)
- Python 3.8+
- Google Generative AI API Key

### 1. Backend Setup

```bash
cd be
python3 -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install flask flask-cors google-generativeai
```

Update the `server.py` with your **Google Generative AI API Key**:

```python
genai.configure(api_key="YOUR_API_KEY")
```

Run the Flask server:

```bash
python server.py
```

### 2. Frontend Setup

```bash
cd fe/medvoiceAi
npm install
npm run dev
```

This will start the development server at `http://localhost:5173`.

## 📦 Build

To create a production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📡 API Endpoint

- `POST /chat/`  
  Expects JSON body:  
  ```json
  {
    "prompt": "What are the symptoms of flu?"
  }
  ```

  Returns:
  ```json
  {
    "response": "Common symptoms include fever, cough, sore throat..."
  }
  ```

## 🛡️ License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

- [Google Generative AI](https://ai.google/discover/gemini/)
- [Flask](https://flask.palletsprojects.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Speech Recognition](https://www.npmjs.com/package/react-speech-recognition)
