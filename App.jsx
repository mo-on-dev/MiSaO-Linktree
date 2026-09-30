import { useEffect, useState } from "react";

import "./App.css";

import {
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  FiArrowUpRight,
  FiTerminal,
  FiUser,
  FiMinus,
  FiSquare,
  FiX,
  FiMoon,
  FiSun,
  FiLock,
} from "react-icons/fi";

import logo from "./assets/logo_animado.webm";
import backgroundLight from "./assets/background_light.png";
import backgroundDark from "./assets/background_dark.png";
import profile1 from "./assets/profile1.png";
import profile2 from "./assets/profile2.png";


/* ============================================================
   REDES SOCIALES
============================================================ */

const socials = [
  {
    name: "X",
    username: "@misaovtuber",
    description: "¡Sígueme!",
    icon: FaXTwitter,
    url: "https://x.com/misaovtuber",
    accent: "#d8d0ef",
  },
  {
    name: "TikTok",
    username: "@misa_kata",
    description: "Videitos cortos",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@misa_kata",
    accent: "#FE2C55",
  },
  {
    name: "Instagram",
    username: "@misaovtuber",
    description: "Videitos y más",
    icon: FaInstagram,
    url: "https://www.instagram.com/misaovtuber/",
    accent: "#c1558b",
  },
  {
    name: "Discord",
    username: "Mi server",
    description: "¡Entra a mi comunidad!",
    icon: FaDiscord,
    url: "https://discord.com/",
    accent: "#7289da",
  },
  {
    name: "YouTube",
    username: "@misaovtuber",
    description: "¿Más videos?",
    icon: FaYoutube,
    url: "https://www.youtube.com/@misaovtuber",
    accent: "#bf2626",
  },
  {
    name: "Twitch",
    username: "MiSaOVtuber",
    description: "¡Ven a verme en vivo!",
    icon: FaTwitch,
    url: "https://www.twitch.tv/misaovtuber",
    accent: "#9146ff",
  },
];


/* ============================================================
   NAV
============================================================ */

const navItems = [
  {
    label: "HOME",
    icon: FiUser,
    href: "#home",
  },
];


/* ============================================================
   SOCIAL CARD
============================================================ */

function SocialCard({ social, index }) {
  const Icon = social.icon;

  return (
    <a
      className="social-card"
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${social.name} ${social.username}`}
      style={{
        "--accent": social.accent,
        "--delay": `${1.55 + index * 0.08}s`,
      }}
    >
      <div className="social-card-glow" />

      <span className="social-card-user">
        {social.username}
      </span>

      <div className="social-card-icon">
        <Icon />
      </div>

      <div className="social-card-copy">
        <strong>{social.name}</strong>
        <span>{social.description}</span>
      </div>

      <div className="social-card-arrow">
        <FiArrowUpRight />
      </div>
    </a>
  );
}


/* ============================================================
   SIDEBAR
============================================================ */

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-nav">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              className={`sidebar-item ${
                index === 0 ? "active" : ""
              }`}
              href={item.href}
            >
              <span className="sidebar-slash">
                //
              </span>

              <Icon />

              <span>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      <div className="sidebar-bottom">
        <div className="pixel-heart">
          ♥
        </div>
      </div>
    </aside>
  );
}


/* ============================================================
   TERMINAL
============================================================ */

function TerminalPanel() {
  return (
    <div className="terminal-panel terminal-error">
      <div className="terminal-header">
        <FiTerminal />

        <span>
          MISAO.exe
        </span>

        <div className="terminal-dots">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="terminal-content">
        <p>
          <span>&gt;</span>
          {" "}Loading operator data...
        </p>

        <p>
          <span>&gt;</span>
          {" "}Connecting to MODEL_V2...
        </p>

        <p className="terminal-warning">
          <span>&gt;</span>
          {" "}WARNING: encrypted data detected
        </p>

        <p className="terminal-error-line">
          <span>&gt;</span>
          {" "}ERROR: failed to load operator profile
        </p>

        <p className="terminal-error-line">
          <span>&gt;</span>
          {" "}ACCESS_DENIED
        </p>

        <p className="terminal-offline-line">
          <span>&gt;</span>
          {" "}SYSTEM OFFLINE_
        </p>

        <div className="terminal-cursor" />
      </div>
    </div>
  );
}


/* ============================================================
   PROFILE CENSURADO
============================================================ */

function ProfileCard() {
  return (
    <section
      className="profile-card censored-profile"
      id="about"
    >
      {/* AVATAR */}

      <div className="profile-avatar">
        <div className="avatar-ring censored-avatar-ring">
          <div className="avatar-core censored-avatar">
            <img
              src={profile1}
              alt=""
              aria-hidden="true"
              className="avatar-image avatar-image-default"
            />

            <img
              src={profile2}
              alt=""
              aria-hidden="true"
              className="avatar-image avatar-image-hover"
            />

            <div className="avatar-censor-grid" />

            <div className="avatar-censor-bar censor-bar-1">
              REDACTED
            </div>

            <div className="avatar-censor-bar censor-bar-2">
              █████████
            </div>

            <div className="avatar-scanline" />
          </div>
        </div>

        <div className="online-pill offline-pill">
          <span />
          OFFLINE
        </div>
      </div>


      {/* INFORMACIÓN */}

      <div className="profile-content censored-content">
        <div className="profile-heading">
          <div>
            <span className="profile-label">
              // OPERATOR_PROFILE
            </span>

            <h1 className="redacted-title">
              ██████ ██████
              <b>✦</b>
            </h1>
          </div>
        </div>

        <div className="profile-role redacted-role">
          <span className="redacted-text">
            ███████████
          </span>

          <i>✦</i>

          <span className="redacted-text">
            ███████
          </span>

          <i>✦</i>

          <span className="redacted-text">
            ███████████████
          </span>
        </div>

        <div className="classified-description">
          <FiLock />

          <div>
            <strong>
              OPERATOR DATA CLASSIFIED
            </strong>

            <span>
              No autorizado para visualizar esta información.
            </span>
          </div>
        </div>

        <div className="profile-tags classified-tags">
          <span>[LOCKED]</span>
          <span>[REDACTED]</span>
          <span>[ENCRYPTED]</span>
          <span>[UNKNOWN]</span>
          <span>[???]</span>
        </div>
      </div>


      {/* TRACKING */}

      <div
        className="profile-decoration reticle-decoration corrupted-reticle"
        aria-hidden="true"
      >
        <div className="reticle">
          <div className="reticle-ring reticle-ring-outer" />
          <div className="reticle-ring reticle-ring-middle" />
          <div className="reticle-ring reticle-ring-inner" />

          <div className="reticle-cross reticle-cross-h" />
          <div className="reticle-cross reticle-cross-v" />

          <div className="reticle-corner reticle-corner-tl" />
          <div className="reticle-corner reticle-corner-tr" />
          <div className="reticle-corner reticle-corner-bl" />
          <div className="reticle-corner reticle-corner-br" />

          <div className="reticle-sweep" />

          <div className="reticle-dot" />
        </div>

        <span className="reticle-label">
          TRACKING_FAILED
        </span>
      </div>


      {/* CLASSIFIED */}

      <div
        className="classified-overlay-label"
        aria-hidden="true"
      >
        <FiLock />
        CLASSIFIED
      </div>
    </section>
  );
}


/* ============================================================
   APP
============================================================ */

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme =
      window.localStorage.getItem(
        "misao-theme"
      );

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });


  useEffect(() => {
    window.localStorage.setItem(
      "misao-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);


  return (
    <main
      className={`page ${
        darkMode
          ? "dark-mode"
          : "light-mode"
      }`}
      style={{
        "--background-pattern": `url(${
          darkMode
            ? backgroundDark
            : backgroundLight
        })`,
      }}
    >
      <div className="background-effects" />

      <section
        className="app-window"
        id="home"
      >
        {/* HEADER */}

        <header className="window-header">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="window-title">
            <strong>
              MISAO.exe
            </strong>

            <span>/</span>

            <span>
              Mis redes
            </span>
          </div>

          <div className="window-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label={
                darkMode
                  ? "Activar modo claro"
                  : "Activar modo oscuro"
              }
              title={
                darkMode
                  ? "Modo claro"
                  : "Modo oscuro"
              }
              onClick={() =>
                setDarkMode(
                  (current) => !current
                )
              }
            >
              {darkMode ? (
                <FiSun />
              ) : (
                <FiMoon />
              )}
            </button>

            <button
              type="button"
              aria-label="Minimize"
            >
              <FiMinus />
            </button>

            <button
              type="button"
              aria-label="Maximize"
            >
              <FiSquare />
            </button>

            <button
              type="button"
              aria-label="Close"
              className="close-button"
            >
              <FiX />
            </button>
          </div>
        </header>


        {/* BODY */}

        <div className="app-body">
          <Sidebar />

          <div className="dashboard">

            {/* HERO */}

            <section className="hero">
              <div className="hero-grid" />

              <div className="hero-deco hero-deco-1">
                ✦
              </div>

              <div className="hero-deco hero-deco-2">
                ♡
              </div>

              <div className="hero-deco hero-deco-3">
                ✦
              </div>

              <div className="hero-logo">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={logo}
                    type="video/webm"
                  />
                </video>

                <div className="hero-tagline">
                  <span>
                    AVATAR VIRTUAL
                  </span>

                  <b>✦</b>

                  <span>
                    GAMING
                  </span>

                  <b>✦</b>

                  <span>
                    CREADOR DE CONTENIDO
                  </span>
                </div>
              </div>

              <TerminalPanel />
            </section>


            {/* PROFILE */}

            <ProfileCard />


            {/* REDES */}

            <section
              className="links-section"
              id="links"
            >
              <div className="section-header">
                <div>
                  <span className="section-kicker">
                    // NETWORK_NODES
                  </span>

                  <h2>
                    Conéctate a mi red ♡
                  </h2>
                </div>

                <span className="connection-status">
                  <i />
                  LINK ESTABLISHED
                </span>
              </div>

              <div className="social-grid">
                {socials.map(
                  (social, index) => (
                    <SocialCard
                      key={social.name}
                      social={social}
                      index={index}
                    />
                  )
                )}
              </div>
            </section>


            {/* FOOTER */}

            <footer className="footer">
              <span>
                BUILD 2026.10
              </span>

              <span>
                BUILT WITH ♡ + CAFFEINE // MoonDev
              </span>

              <span className="footer-offline">
                STATUS: OFFLINE
              </span>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;