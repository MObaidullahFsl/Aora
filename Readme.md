# Aora - React Native Video Sharing App

Aora is a **mobile video-sharing platform** built with **React Native (Expo)** and **Appwrite**.
It allows users to sign up, log in, search for videos, watch content, and upload videos directly from their device.

---

## Features

* User authentication with **Appwrite** (signup/login)
* Upload videos from device storage
* Browse and search for videos
* Play videos within the app
* Responsive UI built with **React Native Expo**
* Scalable backend with **Appwrite** for data storage

---

## Screenshots


![Welcome Screen](screenshots/1.jpg)
![Login Screen](screenshots/2.jpg)
![Video Feed](screenshots/3.jpg)
![User Account](screenshots/4.jpg)
![Upload Video](screenshots/5.jpg)

---

## Tech Stack

* **Frontend:** React Native, Expo
* **Backend / Auth / Database:** Appwrite
* **Video Storage:** Appwrite Storage

---

## Installation & Running Locally

1. Clone the repo:

```bash
git clone https://github.com/MObaidullahFsl/Aora.git
cd Aora
```

2. Install dependencies:

```bash
npm install
```

3. Configure Appwrite:
   Copy your Appwrite endpoint and project ID into a `.env` file

4. Start the Expo development server:

```bash
npx expo start
```

(Requires Expo Go mobile app)

---

##  Future Plans

* Hosting on a public domain
* Push notifications for new videos
* Comments and likes
* Video categories and subscriptions
