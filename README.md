🚀 Sasindra Portfolio – React Developer Portfolio with Smart Chatbot

A modern, responsive personal portfolio website built using React, showcasing my skills, projects, certifications, and career profile as a Java Full Stack Developer.
Includes a smart rule-based AI Portfolio Chatbot (no external API) to answer recruiter and visitor questions in real time.

📌 Live Preview

🔗 Live Website: (" http://sasindraportfolio.netlify.app/ ")
🔗 GitHub Repository: ( " https://github.com/sasindra143/SASINDRA-PORTFOLIO " )

🧑‍💻 About Me

Hi 👋 I’m Sasindra, a passionate Java Full Stack Developer with strong expertise in:

Frontend: React, JavaScript, HTML, CSS


Tools:  Git, GitHub

🎯 Career Objective:
To build scalable, high-performance web applications and continuously grow as a full-stack engineer.

✨ Key Features
🌐 Portfolio Website

Fully responsive (Mobile, Tablet, Desktop)

Modern UI/UX design

Smooth scrolling & animations

Clean component-based architecture

SEO-friendly structure

🤖 AI Portfolio Chatbot (No API)

100% frontend-based (no backend / no API)

Predefined intelligent Q&A (50+ questions)

Human-like conversations:

“Hi, how are you?”

“Who is Sasindra?”

“Tell me about your projects”

Quick question buttons

Chat auto-reset on close

Floating robot UI with tagline:

🤖 “How can I help you today?”

🧩 Modular Components

Header / Hero / About / Skills

Projects showcase

Certifications section

Contact information

Footer

🛠️ Tech Stack
Frontend

⚛️ React (Vite)

🟨 JavaScript (ES6+)

🎨 HTML5 & CSS3

Tools & Platforms

Git & GitHub

VS Code

Netlify / Vercel (Deployment)

📂 Advanced Folder Structure
Portfolio/
│
├── Frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Chatbot.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── Header.css
│   │   │   ├── Hero.css
│   │   │   ├── Chatbot.css
│   │   │   └── global.css
│   │   │
│   │   ├── data/
│   │   │   ├── chatbotData.js   // 50+ predefined Q&A
│   │   │   ├── projectsData.js
│   │   │   └── skillsData.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md

🤖 Chatbot Functionality (No API)
How it Works

Uses predefined question–answer mapping

Matches user input using keywords

Responds instantly (no server delay)

Safe, fast, and deployment-friendly

Example Questions

Who is Sasindra?

What skills do you have?

Tell me about your projects

How can I contact you?

What is your career objective?

Hi, how are you?

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/sasindra143/SASINDRA-PORTFOLIO.git

2️⃣ Navigate to Project
cd Frontend

3️⃣ Install Dependencies
npm install

4️⃣ Run Development Server
npm run dev


App will run at:

http://localhost:5173

📦 Build for Production
npm run build

🌍 Deployment

You can deploy easily using:

✅ Netlify

✅ GitHub Pages

📸 Screenshots

<img width="1919" height="826" alt="Screenshot 2025-12-29 175544" src="https://github.com/user-attachments/assets/96ebb530-8e33-47c2-8a80-42d76fac464d" />

<img width="1919" height="827" alt="Screenshot 2025-12-29 175600" src="https://github.com/user-attachments/assets/8ee79265-d083-4931-8f77-1306b105e3d2" />

<img width="1919" height="820" alt="Screenshot 2025-12-29 175616" src="https://github.com/user-attachments/assets/2db9861c-7560-4f05-99de-c708c814ef39" />

<img width="1911" height="813" alt="Screenshot 2025-12-29 175633" src="https://github.com/user-attachments/assets/1a50835a-986d-4988-8e49-1904ffbe9d4d" />

<img width="1919" height="825" alt="Screenshot 2025-12-29 175652" src="https://github.com/user-attachments/assets/0c6e5419-f800-4d64-a5ae-ebbcb6a6cc9d" />

<img width="1919" height="832" alt="Screenshot 2025-12-29 175706" src="https://github.com/user-attachments/assets/3fb6c9bd-b2ba-475c-b77a-537d7549d7f9" />

<img width="1918" height="324" alt="Screenshot 2025-12-29 175721" src="https://github.com/user-attachments/assets/3da94b70-e1ca-4d7c-bd9d-b733dbacccb3" />




📈 Future Enhancements

Backend-powered AI chatbot

Admin panel for chatbot Q&A

Blog section

Dark/Light theme toggle

Multi-language support

🤝 Contribution

Contributions, suggestions, and feedback are always welcome!

📬 Contact Me

📧 Email: sasindragandla@gmail.com

💼 LinkedIn: www.linkedin.com/in/sasindra-madduri

🐙 GitHub: https://github.com/sasindra143

⭐ If you like this project

Please star ⭐ the repository — it motivates me to build more!







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
