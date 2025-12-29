# Authentication UI PRO

A **modern frontend authentication system UI** built using **HTML, CSS, and JavaScript**, simulating real-world authentication flows such as signup, login, OTP verification, and password reset.

This is a **frontend-only demo** (OTP is mocked for learning purposes).

---

## Features

- User Signup
- Login with email & password
- Show / Hide password toggle
- Password strength indicator
- OTP verification (demo)
- Forgot password with OTP
- Session handling using `localStorage`
- Protected dashboard route
- Modern, clean UI design

---

## Tech Stack

- **HTML5**
- **CSS3** (Modern UI, Flexbox)
- **JavaScript (ES6)**
- **Browser localStorage**

---

## Project Structure
Authentication UI/
│── index.html (Login)
│── signup.html (Signup)
│── otp.html (OTP Verification)
│── forgot.html (Forgot Password)
│── dashboard.html (Protected Page)
│── style.css
│── script.js
│── README.md

## How Authentication Works (Demo)

- User signs up → OTP is generated and shown via alert
- OTP is stored temporarily in `localStorage`
- OTP verification redirects user to login
- Login sets a session flag in `localStorage`
- Dashboard is protected from direct access

---

## Important Note

This project **does not send real emails or SMS**.

> In real-world applications, OTP and password handling must be done securely using a backend (Node.js, Firebase, etc.).

---

## 📸 Screenshots
(Add screenshots here if uploaded to GitHub)

---

## Live Demo
(Add Netlify / Vercel link here)

---

## Resume Description

> Designed and implemented a frontend authentication UI featuring signup, login, OTP verification, password visibility toggle, password strength validation, and session-based route protection using localStorage.

---

## Future Enhancements

- Real OTP using Node.js + Nodemailer
- Password hashing with bcrypt
- Firebase Authentication
- React version
- Backend API integration

---

## Author
**Ganesh Dangari**
