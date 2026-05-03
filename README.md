# CivicPath - Interactive Election Assistant

**CivicPath** is a premium, full-stack solution designed to demystify the election process. By leveraging Google's robust ecosystem, it provides a personalized, location-aware, and AI-driven journey for every voter.

---

## 🌟 Vision
The election process can be complex and overwhelming. CivicPath aims to simplify this journey by providing clear information, real-time guidance, and intelligent assistance, ensuring every citizen can exercise their right to vote with confidence.

---

## 🎯 Problem Statement Alignment
CivicPath explicitly addresses the core challenges of voter education and participation:
1. **Challenge: Finding Polling Locations** ➡️ **Solution:** "Where's my Booth?" map integration.
2. **Challenge: Understanding Complex Election Laws** ➡️ **Solution:** Smart Assistant using Gemini AI.
3. **Challenge: Voter ID Verification Status** ➡️ **Solution:** Identity Verification via Cloud Vision AI.
4. **Challenge: Remembering Election Dates** ➡️ **Solution:** Key Date Sync with Google Calendar.

---

## 🚀 Key Features

### 📍 "Where's my Booth?"
- **Integration:** Google Maps API
- **Value:** Visualizes the nearest polling station based on the user's location and provides real-time navigation.

### 🤖 Smart Assistant
- **Integration:** Gemini 1.5 Flash (via Google AI SDK)
- **Value:** An interactive chatbot that parses complex election laws and candidate affidavits into simple, actionable summaries.

### 🛡️ Identity Verification
- **Integration:** Google Cloud Vision AI (Mock UI)
- **Value:** Users can scan their Voter ID to verify their registration status or auto-fill necessary forms.

### 📅 Key Date Sync
- **Integration:** Google Calendar API (Placeholder)
- **Value:** Automatically adds election dates and registration deadlines to the user's calendar.

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite
- **Styling:** Vanilla CSS (Glassmorphism, Premium Dark Mode)
- **Icons:** Lucide React
- **Maps:** @react-google-maps/api
- **AI:** @google/genai (Gemini)
- **Backend/DB:** Firebase (Firestore & Authentication)

---

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js installed
- A Google Cloud Project with billing enabled
- Firebase Project setup

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your Google/Firebase API keys:
```properties
# Firebase Configuration
VITE_FIREBASE_API_KEY="your_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_auth_domain"
VITE_FIREBASE_PROJECT_ID="your_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"
VITE_FIREBASE_APP_ID="your_app_id"

# Google Maps API
VITE_GOOGLE_MAPS_API_KEY="your_maps_api_key"

# Gemini API
VITE_GEMINI_API_KEY="your_gemini_api_key"
```

### 4. Run Locally
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 🎨 UI/UX Philosophy
- **Modern Aesthetics:** Utilizes glassmorphism, smooth gradients, and vibrant accents.
- **Accessibility:** Designed to be inclusive for diverse users.
- **Micro-interactions:** Interactive hover effects and smooth transitions for a premium feel.

---

## 🛡️ Safety & Security
- Follows safe coding practices to avoid common vulnerabilities.
- Environment variables are used to manage sensitive API keys.
- Scalable architecture using Google Cloud's serverless infrastructure.

---

## 📈 Potential Impact
CivicPath is built to handle high concurrency during peak election hours, ensuring a smooth and reliable experience for millions of voters.

---