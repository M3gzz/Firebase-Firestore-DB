# 🔥 Firebase Firestore Practice

This is a simple **React app** created as personal practice to learn how to integrate **Firebase Firestore** for storing and retrieving data in real-time.

The app features a basic global highscore system: It reads the current highscore from a Firestore document and displays it. It's a minimal project focused on understanding Firestore setup, security rules, reading data and handling common issues like permissions and document existence.

Through building this, I learned a lot about Firebase configuration, async data fetching in React and writing ssecure Firestore rules.

## 💻 Technologies

- React
- javaScript
- Firebase (Firestore)

## ☺︎ Features

- Connects to Firebase Firestore
- Fetches and displays a highschore value from a document (`Highscore/Current`)
- Safe error handling for missing documents
- Basic security rules to allow reads and validates writes

## 📌 Running the project
1. Clone the repository

`git clone https://github.com/M3gzz/Firebase-Firestore-DB.git`

2. Install dependencies

`npm install`

3. Add your Firebase config
   -Create a file like `src/firebase.js` with your own firebase project config ( replace the example one )

4. Run the development server

`npm start`

5. Open https://localhost:3000 in your browser

Note: You'll need your own Firebase project with Firestore enabled and the document `Highschore/Current` created ( with a `score` field) for it to work fully.


##  ⭐️  Live Demo


https://reactfrontenddeleteme-1c564.web.app/




