# PrepGenie: AI Job Interview Assistant

A job interview preparation platform powered by Vapi AI Voice agents and Google Gemini

## 🤖 Introduction
This web application off ers interview practice with an AI voice agent and provides multidimensional feedback. Users can customize topics, review past sessions, and practice with recent interview questions from popular companies

## ⚙️ Tech Stack
Next.js

Firebase

Tailwind CSS

Vapi AI

shadcn/ui

Google Gemeni

Zod

## 🔋 Features
👉 Authentication: Sign Up and Sign In using password/email authentication handled by Firebase.

👉 Create Interviews: Easily generate job interviews with help of Vapi voice assistants and Google Gemini.

👉 Get feedback from AI: Take the interview with AI voice agent, and receive instant feedback based on your conversation.

👉 Modern UI/UX: A sleek and user-friendly interface designed for a great experience.

👉 Interview Page: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

👉 Dashboard: Manage and track all your interviews with easy navigation.

👉 Responsiveness: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability


## Getting Started

### Cloning the Repository
```
git clone https://github.com/Qqing0531/ai-interview-platform.git
cd ai-interview-platform
```
### Installation

Install the project dependencies using npm:
```
npm install
```
### Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:
```
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```
Replace the placeholder values with the actual Firebase, Vapi credentials.

### Running the Project
```
npm run dev
```
Open http://localhost:3000 in your browser to view the project.
