import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="gradient-bg">
  <!-- Header/Hero Section -->
  <header class="hero-section">
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <img src="${viteLogo}" alt="Vite" width="32" height="32">
          <span>Anderson Ramos</span>
        </div>
        <div class="nav-toggle" id="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div class="hero-content">
        <div class="hero-visual">
          <div class="floating-cards">
            <div class="card typescript-card">
              <img src="${typescriptLogo}" alt="TypeScript" />
              <span>TypeScript</span>
            </div>
            <div class="card vite-card">
              <img src="${viteLogo}" alt="Vite" />
              <span>Vite</span>
            </div>
          </div>
          <div class="hero-image-container">
            <img src="${heroImg}" class="hero-image" alt="Hero" />
            <div class="hero-glow"></div>
          </div>
        </div>
        
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">Hello World</span>
            <br>
            <span>Anderson Ramos</span>
          </h1>
          <p class="hero-subtitle">
            Desenvolvedor Full Stack apaixonado por TypeScript, Vite e tecnologias modernas.
            Edite <code>src/main.ts</code> e veja a mágica do HMR acontecer!
          </p>
          
          <div class="hero-actions">
            <button id="counter" class="btn btn-primary counter">
              <span>0</span>
              <svg class="icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="btn btn-secondary">
              <svg class="icon" viewBox="0 0 24 24" fill="none">
                <path d="M17 3.34a1.07 1.07 0 0 1-.94.59 1.06 1.06 0 0 1-.94-.59 1.06 1.06 0 0 0-2 0 1.07 1.07 0 0 1-.94.59 1.07 1.07 0 0 1-.94-.59 1.06 1.06 0 0 0-2 0 1.07 1.07 0 0 1-.94.59 1.07 1.07 0 0 1-.94-.59" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Novo Projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Features Section -->
  <section class="features-section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon"></div>
          <h3>Hot Module Replacement</h3>
          <p>Edite seu código e veja as mudanças instantaneamente sem perder o estado da aplicação.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"></div>
          <h3>Build Ultra-Rápido</h3>
          <p>Compilação em milissegundos. Desenvolvimento em menos de 1s.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"></div>
          <h3>TypeScript Nativo</h3>
          <p>Suporte completo ao TypeScript com autocompletar e type checking em tempo real.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Next Steps Section -->
  <section class="next-steps-section">
    <div class="container">
      <h2 class="section-title">Próximos Passos</h2>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7v10c0 1.1.9 2 2 2h12s2 0 2-2V7l-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2v20M16 6h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8 6H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3>Documentação</h3>
          </div>
          <p>Encontre respostas para todas as suas dúvidas</p>
          <div class="card-links">
            <a href="https://vite.dev/" target="_blank" class="link">
              <img src="${viteLogo}" alt="Vite" width="20" height="20" />
              Vite
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" class="link">
              <img src="${typescriptLogo}" alt="TypeScript" width="20" height="20" />
              TypeScript
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none">
              <path d="M22 2H2v20l10-10 10 10V2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3>Conecte-se</h3>
          </div>
          <p>Junte-se à comunidade Vite</p>
          <div class="social-links">
            <a href="https://github.com/vitejs/vite" target="_blank" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552