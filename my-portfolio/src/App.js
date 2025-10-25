import React from "react";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <header className="card">
        {}
        <img
          src="/tony-soprano-1024-580.webp"
          alt="Profile"
          className="avatar"
        />

        <h1>Gia Kvaratskhelia</h1>
        <p className="subtitle">Front-End Learner • React • HTML/CSS/JS</p>

        <p className="about">
          Hi! I’m learning front-end development with React. I enjoy building
          clean, responsive UIs and improving a little every day.
        </p>

        <div className="links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </header>

      <footer className="foot">
        © {new Date().getFullYear()} Gia Kvaratskhelia
      </footer>
    </main>
  );
}
