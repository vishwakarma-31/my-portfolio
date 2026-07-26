"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0');

        .not-found-root {
          font-family: 'DM Sans', sans-serif;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background-image:
            url('https://pub-e68758f43067417dba612b2371819aa1.r2.dev/viktor-components/alien-spaceship.png'),
            linear-gradient(to top left, #F5F5F5, #F7F7F7);
          background-repeat: no-repeat, no-repeat;
          background-position: center 40%, center;
          background-size: contain, cover;
          background-attachment: fixed, fixed;
          --text-main: #1a1a1a;
          --text-secondary: #888888;
          --bg-page: #F5F5F5;
          --card-bg: #ffffff;
        }

        .nf-navbar {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          padding: 28px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          flex-shrink: 0;
        }
        .nf-navbar::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 40px;
          right: 40px;
          height: 1px;
          background-image: linear-gradient(to right, rgba(0,0,0,0.08) 2px, transparent 2px);
          background-size: 6px 1px;
        }
        .nf-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
        }
        .nf-logo img {
          height: 28px;
          filter: brightness(0);
        }
        .nf-logo-text {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.3px;
          color: #111;
        }
        .nf-nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nf-nav-links a {
          font-size: 14px;
          font-weight: 400;
          color: #1a1a1a;
          text-decoration: none;
          opacity: 0.65;
          transition: opacity 0.2s;
        }
        .nf-nav-links a:hover { opacity: 1; }

        .nf-cta-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(180deg, #2c2c2c 0%, #111111 100%);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          border-radius: 40px;
          padding: 5px 16px 5px 5px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          text-decoration: none;
        }
        .nf-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          filter: brightness(1.1);
        }
        .nf-cta-icon {
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nf-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 110;
        }
        .nf-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .nf-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nf-hamburger.open span:nth-child(2) { opacity: 0; }
        .nf-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .nf-mobile-nav {
          position: fixed;
          inset: 0;
          background: #F5F5F5;
          z-index: 100;
          display: flex;
          flex-direction: column;
          padding: 100px 32px 40px;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .nf-mobile-nav.open { transform: translateX(0); }
        .nf-mobile-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }
        .nf-mobile-nav ul li a {
          display: block;
          font-size: 38px;
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #0f0f0f;
          text-decoration: none;
          padding: 24px 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .nf-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 700px;
          width: 100%;
          margin: 0 auto;
          padding: 20px 20px 30px;
          overflow: hidden;
        }
        .nf-lost-text {
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 400;
          margin-bottom: 12px;
          text-align: center;
        }
        .nf-title-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 14px;
          text-align: center;
        }
        .nf-deco-cloud {
          position: absolute;
          top: -18px;
          left: -24px;
          font-size: 42px;
          font-family: 'Material Symbols Rounded';
          background: linear-gradient(to bottom, #F7B2FB 50%, #786EF1 80%, #5588FB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.9));
          animation: floatSlow 5s ease-in-out 0.3s infinite;
          line-height: 1;
          user-select: none;
        }
        .nf-deco-heart {
          position: absolute;
          bottom: -15px;
          right: 20px;
          font-size: 32px;
          font-family: 'Material Symbols Rounded';
          background: linear-gradient(to bottom, #F7B2FB 50%, #786EF1 80%, #5588FB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.9));
          animation: floatSlow 4.5s ease-in-out 1s infinite;
          line-height: 1;
          user-select: none;
        }
        .nf-title {
          font-size: clamp(34px, 5vw, 52px);
          font-weight: 500;
          letter-spacing: -1.5px;
          line-height: 1.08;
          color: #0f0f0f;
          text-align: center;
        }
        .nf-subtext {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 470px;
          margin-bottom: 28px;
          text-align: center;
        }
        .nf-highlight {
          display: inline-flex;
          align-items: center;
          background: #E0E2E7;
          font-size: 12.5px;
          font-weight: 600;
          color: #1a1a1a;
          padding: 2px 12px;
          border-radius: 6px;
          vertical-align: baseline;
          margin: 0 2px;
        }
        .nf-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 460px;
          margin-top: auto;
        }
        .nf-card {
          background: white;
          border-radius: 18px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .nf-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.08);
        }
        .nf-card:hover .nf-card-icon { transform: scale(1.05); }
        .nf-card:hover .nf-card-arrow { transform: translateX(6px); }
        .nf-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nf-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #eaecf0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .nf-card-title {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 2px;
        }
        .nf-card-sub {
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0;
        }
        .nf-card-arrow {
          font-size: 21px;
          color: #888;
          transition: transform 0.25s ease;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }

        @media (max-width: 768px) {
          .not-found-root {
            background-size: 90%, cover;
            background-position: center 45%, center;
          }
          .nf-navbar { padding: 20px; }
          .nf-navbar::after { left: 20px; right: 20px; }
          .nf-nav-links { display: none; }
          .nf-cta-desktop { display: none; }
          .nf-hamburger { display: flex; }
          .nf-deco-cloud { font-size: 32px; top: -14px; left: -16px; }
          .nf-deco-heart { font-size: 24px; bottom: -12px; right: 14px; }
          .nf-cards { max-width: 100%; gap: 10px; }
          .nf-card { padding: 14px 16px; border-radius: 14px; }
          .nf-card-icon { width: 40px; height: 40px; }
        }
        @media (max-width: 480px) {
          .not-found-root {
            background-size: 100%, cover;
          }
          .nf-title { font-size: 26px; }
          .nf-deco-cloud { font-size: 26px; }
          .nf-deco-heart { font-size: 20px; }
        }
      `}</style>

      <div className="not-found-root">
        {/* Navbar */}
        <nav className="nf-navbar">
          <Link href="/" className="nf-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/Tests/logoipsum-415.svg"
              alt="nexto. logo"
            />
            <span className="nf-logo-text">nexto.</span>
          </Link>

          <ul className="nf-nav-links">
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Solutions ▾</a></li>
            <li><a href="#">Showcase</a></li>
            <li><a href="#">News</a></li>
          </ul>

          <a href="#" className="nf-cta-btn nf-cta-desktop">
            <span className="nf-cta-icon">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Let&apos;s Connect
          </a>

          <button
            className={`nf-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Mobile Nav Overlay */}
        <div className={`nf-mobile-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {["Our Team", "Solutions", "Showcase", "News"].map((item) => (
              <li key={item}><a href="#" onClick={() => setMenuOpen(false)}>{item}</a></li>
            ))}
          </ul>
          <a href="#" className="nf-cta-btn" style={{ marginTop: 32, alignSelf: "flex-start", padding: "5px 20px 5px 5px" }}>
            <span className="nf-cta-icon" style={{ width: 32, height: 32 }}>
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Let&apos;s Connect
          </a>
        </div>

        {/* Main Content */}
        <main className="nf-main">
          <p className="nf-lost-text">Seems you&apos;ve wandered off...</p>

          <div className="nf-title-wrapper">
            <span className="nf-deco-cloud" aria-hidden="true">cloud</span>
            <h1 className="nf-title">Whoops! Nothing here yet</h1>
            <span className="nf-deco-heart" aria-hidden="true">favorite</span>
          </div>

          <p className="nf-subtext">
            Grab a 30-minute <span className="nf-highlight">chat</span> to explore your ideas, scope, and vision.
            We&apos;ll find common ground, sync and <span className="nf-highlight">define</span> a clear roadmap.
          </p>

          {/* Navigation Cards */}
          <div className="nf-cards">
            <Link href="/" className="nf-card">
              <div className="nf-card-left">
                <div className="nf-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/>
                    <path d="M9 21V12h6v9"/>
                  </svg>
                </div>
                <div>
                  <p className="nf-card-title">Main Page</p>
                  <p className="nf-card-sub">Back where it all begins...</p>
                </div>
              </div>
              <span className="nf-card-arrow">›</span>
            </Link>

            <Link href="/projects" className="nf-card">
              <div className="nf-card-left">
                <div className="nf-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" fill="#1a1a1a"/>
                    <circle cx="12" cy="12" r="3.5" fill="white"/>
                  </svg>
                </div>
                <div>
                  <p className="nf-card-title">Showcase</p>
                  <p className="nf-card-sub">Where we walk the walk</p>
                </div>
              </div>
              <span className="nf-card-arrow">›</span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
