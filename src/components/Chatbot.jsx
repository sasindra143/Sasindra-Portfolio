import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

/* Initial bot message */
const INITIAL_MESSAGE = [
  {
    from: "bot",
    text: "🤖 Hi 👋 I’m Sasindra’s AI Assistant. How can I help you today?",
  },
];

/* Knowledge base (shortened here – keep your full list) */
const knowledgeBase = [
  // Greetings
  { q: ["hi", "hello", "hey"], a: "Hi 😊 I’m Sasindra’s AI assistant. How can I help you today?" },
  { q: ["how are you"], a: "I’m doing great 🚀 Always ready to talk about Sasindra!" },

  // About
  { q: ["who is sasindra", "about sasindra"], a: "Sasindra Madduri is an entry-level Java Full Stack Developer with strong skills in frontend, backend, and real-time web applications." },

  { q: ["career objective"], a: "Sasindra is actively seeking a Java Full Stack Developer role where he can apply his skills and grow professionally." },

  // Education
  { q: ["education"], a: "Sasindra completed B.Tech in Computer Science from Krishna Chaitanya Institute of Technology & Sciences with CGPA 7.37." },

  // Skills
  { q: ["skills", "what skills"], a: "Sasindra is skilled in Java, Spring Boot, React, HTML, CSS, JavaScript, MySQL, Firebase, and REST APIs." },

  { q: ["java"], a: "Sasindra has strong knowledge in Core Java, JDBC, Servlets, OOP concepts, and Java 8 features." },

  { q: ["frontend"], a: "Frontend skills include HTML5, CSS3, JavaScript, React, and responsive UI development." },

  { q: ["backend"], a: "Backend skills include Java, Spring, Spring Boot, Hibernate, REST APIs, and MySQL." },

  // Projects
  { q: ["projects", "tell me about projects"], a: "Sasindra has built LMS platforms, fraud detection systems, and professional portfolio websites." },

  { q: ["pr skill verse", "lms"], a: "PR Skill Verse is a full-stack LMS built using React, Firebase Authentication, Firestore, and deployed on Netlify." },

  { q: ["fraud detection"], a: "Online Fraud Detection project uses Python, ML, XGBoost, and Streamlit for real-time fraud prediction." },

  { q: ["portfolio"], a: "Sasindra designed and deployed his portfolio using HTML, CSS, JavaScript with animations and responsive UI." },

  // Experience
  { q: ["experience"], a: "Sasindra worked as a Freelance Full Stack Developer on PR Skill Verse LMS platform." },

  // Certifications
  { q: ["certifications"], a: "Sasindra completed Full Stack Web Development certification from TAP Academy." },

  // Tools
  { q: ["tools"], a: "He uses Eclipse IDE, VS Code, GitHub, Netlify, Firebase, and MySQL." },

  // Contact
  { q: ["contact", "reach", "email"], a: "You can contact Sasindra at 📧 sasindragandla@gmail.com" },

  { q: ["phone", "mobile"], a: "📞 Sasindra’s mobile number is +91 9959732476" },

  { q: ["linkedin"], a: "You can find Sasindra on LinkedIn for professional connections." },

  // Job
  { q: ["job", "hiring", "available"], a: "Yes ✅ Sasindra is actively looking for Java Full Stack Developer opportunities." },

  // Default
  { q: ["default"], a: "I didn’t understand that 🤔 You can ask me about skills, projects, education, or contact details." }
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGE);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  /* Auto scroll */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* Get bot reply */
  const getReply = (text) => {
    const msg = text.toLowerCase();
    for (let item of knowledgeBase) {
      if (item.q.some(k => msg.includes(k))) {
        return item.a;
      }
    }
    return knowledgeBase.find(k => k.q[0] === "default").a;
  };

  /* Send message */
  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { from: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      const reply = getReply(userText);
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    }, 400);
  };

  /* 🔥 CLOSE & RESET CHAT */
  const closeChat = () => {
    setOpen(false);
    setTimeout(() => {
      setMessages(INITIAL_MESSAGE); // RESET CHAT
      setInput("");
    }, 200);
  };

  return (
    <>
      {/* Floating button */}
      <div className="chatbot-float" onClick={() => setOpen(true)}>
        🤖
      </div>

      {/* Chat window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            AI Portfolio Assistant
            <span style={{ cursor: "pointer" }} onClick={closeChat}>✖</span>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
