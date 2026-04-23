import './App.css'

function App() {
  return (
    <div className="mission-control">
      <nav className="navbar glass-panel">
        <div className="logo">Ahmet<span className="accent">SEVİM</span></div>
        <div className="nav-links">
          <a href="#about">Hakkımda</a>
          <a href="#projects">Projeler</a>
          <a href="#contact">İletişim</a>
        </div>
      </nav>

      <main className="container">
        {/* Hero & About Section */}
        <section id="about" className="hero-section">
          <div className="hero-content antigravity">
            <h1 className="title">
              Bir<br />
              <span className="accent-text">Yazılım</span> Geliştiricisi
            </h1>
            <div className="about-card glass-panel">
              <h2>Öğrendiğim ve öğrenmekte olduğum yazılım dilleri</h2>
              <p>
                <strong>REACT JS,REACT NATIVE, JavaScript (ES6+), HTML, CSS, PYTHON</strong>
              </p>
            </div>
            <div className="about-card glass-panel">
              <h2>Hakkımda</h2>
              <p>
                Ben Ahmet SEVİM 2007 yılında Bursada doğdum, Afyon Kocatepe Üniversitesi Bilgisayar Programcılığı öğrencisiyim. Lise yıllarımdan bu yana yazılım geliştirme üzerine kendimi eğitiyor, modern web teknolojileri (React, JS) ile projeler üretiyorum.

                Mevcut eğitimimi mühendislik vizyonuyla taçlandırmayı hedefleyen, öğrenmeye ve gelişime açık bir yazılım geliştirici adayıyım.
              </p>
              <p>
                Nihai hedefim, DGS ile mühendislik eğitimimi tamamlayarak hem güvenli hem de yüksek performanslı dijital
                çözümler üreten bir mühendis olmaktır.
              </p>
            </div><div className="about-card glass-panel">
              <h2>Eğitim</h2>
              <p>
                Şuanda Afyon Kocatepe Üniversitesi Bilgisayar Programcılığı Bölümü okumaktayım.
              </p>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">Projelerim</h2>
          <div className="projects-grid">
            <div className="project-card glass-panel antigravity delayed">
              <div className="project-header">
                <h3>Pomodoro App</h3>
                <span className="badge">React JS</span>
              </div>
              <p className="project-desc">
                Bu projemde bir pomodoro projesi yaptım.Sadece düz bir Pomodoro olmasını istemediğim için içerisine dakika başı pomocoin adı verdiğim bir coin sistemi tasarladım.Bu sistem çalıştığı sürece her dakika başı pomocoin veriyor ve bu pomocoinleri mağazada evcil hayvan alarak kullanabiliyoruz.Bu sayede insanları daha fazla çalışmaya motive edebileceğimi düşündüm.
              </p>
              <div className="project-actions">
                <a href="https://ahmetssvm.github.io/PomodoroTimer/" target="_blank" rel="noreferrer" className="btn-outline">
                  <i ></i> Projeye Git
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Links Section */}
        <section id="contact" className="contact-section">
          <div className="contact-card glass-panel antigravity">
            <h2>Bağlantı Kur</h2>
            <p>Benimle iletişime geçmek, projelerimi incelemek veya özgeçmişime göz atmak için aşağıdaki bağlantıları kullanabilirsiniz.</p>
            <div className="links-grid">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="action-btn github-btn">
                <i className="fab fa-github"></i> GitHub Profilim
              </a>
              <a href="mailto:ahmetsvm50@gmail.com" className="action-btn gmail-btn">
                <i className="fas fa-envelope"></i> ahmetsvm50@gmail.com
              </a>
              <a href="public/Ahmet_Sevim_CV.pdf" download="Ahmet_Sevim_CV.pdf" type="application/pdf" className="action-btn cv-btn primary-btn">
                <i className="fas fa-download"></i> CV İndir
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
