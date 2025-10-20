import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <header className="header">
        <div className="glitch-container">
          <h1 className="glitch-text" data-text="Victor Gabriel Les">
            Victor Gabriel Les
          </h1>
        </div>
        <p className="subtitle">◆ ESTUDANTE DE CIÊNCIAS DA COMPUTAÇÃO ◆</p>
        <div className="terminal-cursor">_</div>
      </header>

      <main className="main">
        <section className="about">
          <h2>SOBRE MIM</h2>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn red"></span>
                <span className="btn yellow"></span>
                <span className="btn green"></span>
              </div>
              <span className="terminal-title">victor@unicuritiba:~$</span>
            </div>
            <div className="terminal-content">
              <p className="terminal-line">
                <span className="prompt">victor@unicuritiba:~$</span> 
                <span className="command">whoami</span>
              </p>
              <p className="terminal-output">
                Olá! Eu sou Victor Gabriel Les, um estudante de Ciências da Computação da faculdade UniCuritiba. 
                Comecei minha jornada acadêmica neste ano e estou empolgado para explorar o vasto mundo da tecnologia.
              </p>
            </div>
          </div>
        </section>

        <section className="skills">
          <h2>TECNOLOGIAS</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>CONTROLE DE VERSÃO</h3>
              <p>Git & GitHub</p>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              <h3>DESENVOLVIMENTO WEB</h3>
              <p>HTML & CSS</p>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">☕</div>
              <h3>LINGUAGENS</h3>
              <p>Java & JavaScript</p>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '70%'}}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="learning">
          <h2>EVOLUÇÃO CONTÍNUA</h2>
          <div className="matrix-text">
            <p>
              🌱 Estou sempre aprendendo e buscando novos desafios para aprimorar minhas habilidades. 
              O mundo da tecnologia está em constante evolução e eu estou pronto para acompanhar essa jornada!
            </p>
            <div className="binary-rain">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="binary-digit">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>CONECTE-SE</h2>
          <div className="contact-grid">
            <a 
              href="https://github.com/Victorles777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <span className="link-icon">🔗</span>
              <span className="link-text">GitHub: @Victorles777</span>
              <span className="link-arrow">→</span>
            </a>
            
            <div className="social-links">
              <div className="link-item">
                <span className="link-label">STATUS:</span>
                <span className="status-indicator online">ONLINE</span>
              </div>
              <div className="link-item">
                <span className="link-label">MODO:</span>
                <span className="status-indicator learning">APRENDENDO</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Victor Gabriel Les - Todos os direitos reservados</p>
          <div className="footer-stats">
            <span>◆</span>
            <span>LINHAS DE CÓDIGO: ∞</span>
            <span>◆</span>
            <span>CAFÉS: ☕☕☕</span>
            <span>◆</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App