# 🤖 AI ChatBot (Spring Boot + React + Gemini API)

This project is a simple AI ChatBot application built using:

- **Backend:** Spring Boot (Java, WebClient)
- **Frontend:** React (Vite)
- **AI Model:** Google Gemini API

The user types a message in the React UI, which is sent to the Spring Boot backend.  
The backend calls the Gemini API and returns only the AI response text back to the frontend.

# API Endpoint:

**POST localhost:8080/api/chat/ask**


### Request:

{ "question": "Hello" }


### Response:

Hello! How can I help you today?

## Frontend Setup
```bash
npm install
npm run dev
```

**Runs on**:
```bash
http://localhost:5173
```

## Run Project

Start Spring Boot backend

Start React frontend

Open browser: http://localhost:5173


## AI_ChatBot_Images

<img width="1913" height="1021" alt="image" src="https://github.com/user-attachments/assets/71c88521-62b0-4e9e-9bc2-32d87ccaf72a" />

<img width="1903" height="1029" alt="image" src="https://github.com/user-attachments/assets/d7fa978b-3dcb-4ede-b7a5-b13a39c142a5" />
