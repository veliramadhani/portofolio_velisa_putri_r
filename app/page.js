import { projects } from "./data";

const profile = {
  name: "Velisa Putri Ramadhani",
  role: "Web & Mobile Developer",
  headline: "Building Clean & Functional Web & Mobile Apps",
  intro:
    "An Information Management student who combines clean design with web and mobile development, to create digital products that are well-crafted, easy to use, and impactful.",
  photo: "/foto_veli.jpeg",
  email: "veliramadhani2320@gmail.com",
  waLink: "https://wa.me/6285975388302",
  phone: "+62 859 7538 8302",
  location: "Padang, West Sumatra, Indonesia",
  github: "https://github.com/veliramadhani",
  linkedin: "https://www.linkedin.com/in/velisa-putri-ramadhani-6315ab31b/",
  instagram: "https://www.instagram.com/veli_ramadhani",
  certificate: "#",
  cv: "/cv.pdf",
  social: "https://www.instagram.com/veli_ramadhani",
};

const stack = [
  "Laravel", "PHP", "MySQL", "Flutter", "Next.js",
  "HTML", "CSS", "JavaScript", "Figma", "Git & GitHub",
];

const services = [
  { title: "Web Development", desc: "Building responsive and functional websites from scratch using Laravel and JavaScript." },
  { title: "Mobile App", desc: "Developing cross-platform mobile applications with Flutter connected to a backend." },
  { title: "UI/UX Design", desc: "Designing intuitive and visually appealing interfaces in Figma, complete with prototypes." },
  { title: "Information Systems", desc: "Building web-based management systems for enrollment, retail, and administration." },
  { title: "Backend & Database", desc: "Designing MySQL databases and clean REST APIs to power web and mobile applications." },
  { title: "Deployment", desc: "Publishing websites to go live online using GitHub workflows and modern hosting platforms." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#portfolio">portfolio</a>
        <a href="#contact">contact</a>
        <a href="#docs">docs by me</a>
      </nav>

      <section id="home" className="hero">
        {/* Floating blobs */}
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
        {/* Sparkle decorations */}
        <span className="hero-spark hero-spark-1">✦</span>
        <span className="hero-spark hero-spark-2">✿</span>
        <span className="hero-spark hero-spark-3">✦</span>
        <span className="hero-spark hero-spark-4">◆</span>
        <span className="hero-spark hero-spark-5">✿</span>
        <div className="hero-text">
          <p className="eyebrow">Hi, I&apos;m {profile.name}</p>
          <h1>{profile.headline}</h1>
          <p className="intro">{profile.intro}</p>
          <div className="actions">
            <a className="btn btn-solid" href={profile.waLink} target="_blank" rel="noopener noreferrer">Contact Me</a>
            <a className="btn btn-outline" href="#portfolio">View Projects</a>
          </div>
          <div className="stack">
            <p className="stack-label">Tech Stack</p>
            <div className="chips">
              {stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo" style={{ backgroundImage: `url('/foto-profil.jpeg')` }} />
        </div>
      </section>

      <div className="services-wrapper">
        <section id="services" className="section">
          <span className="svc-deco svc-deco-1">✦</span>
          <span className="svc-deco svc-deco-2">✿</span>
          <div className="section-head">
            <p className="label">What I Offer</p>
            <h2>My Services</h2>
          </div>
          <div className="grid">
            {services.map((s, i) => (
              <div key={s.title} className="service">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="about" className="section about">
        <div className="about-photo-wrap">
          <span className="about-ring" />
          <span className="about-ring about-ring-2" />
          <div className="about-photo" style={{ backgroundImage: `url('/foto-about.jpeg')` }} />
          <span className="about-spark about-spark-1">✦</span>
          <span className="about-spark about-spark-2">✿</span>
        </div>
        <div className="about-content">
          <p className="label">About Me</p>
          <h2>Bridging Design and Development</h2>
          <p>
            I am a Diploma in Information Management student at Politeknik Negeri Padang with a passion for
            web and mobile development. My focus is on creating digital products that are not only
            visually polished, but also functional and user-friendly.
          </p>
          <p>
            This capability is backed by hands-on experience with Laravel, PHP, HTML, CSS, JavaScript,
            MySQL, and Flutter, turning creative ideas into real digital solutions.
          </p>
          <div className="about-badges">
            <span className="about-badge">🎓 Information Management</span>
            <span className="about-badge">📍 Padang, West Sumatra</span>
            <span className="about-badge">💼 Real-Client Projects</span>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="section-head center">
          <h2>Recent Projects</h2>
        </div>

        <div className="grid projects">
          {projects.map((p, idx) => (
            <a key={p.slug} href={`/projects/${p.slug}`} className="project">
              <div className="project-top">
                <h3>{p.title}</h3>
                <span className="arrow">↗</span>
              </div>

              {idx === 0 ? (
                /* PPDB SMK: MacBook putih Apple-style kiri, info kanan biru-ungu */
                <div className="ppdb-body">
                  {/* KIRI: bingkai MacBook CSS putih */}
                  <div className="ppdb-mac-wrap">
                    <div className="ppdb-mac">
                      {/* Layar MacBook */}
                      <div className="ppdb-mac-screen">
                        <div className="ppdb-mac-cam-bar">
                          <span className="ppdb-mac-cam" />
                        </div>
                        <div
                          className="ppdb-mac-display"
                          style={{ backgroundImage: p.images?.[0] ? `url('${p.images[0]}')` : "none" }}
                        />
                      </div>
                      {/* Base / keyboard strip */}
                      <div className="ppdb-mac-base">
                        <span className="ppdb-mac-notch" />
                      </div>
                    </div>
                  </div>
                  {/* KANAN: info biru-ungu */}
                  <div className="ppdb-info">
                    <p className="ppdb-title">{p.title}</p>
                    <span className="ppdb-badge">Group Project</span>
                    <ul className="ppdb-features">
                      {p.features && p.features.map((f) => (
                        <li key={f}><span className="ppdb-check">✓</span>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              ) : idx === 1 ? (
                /* Santan Ardafa: info kiri hijau sage, 2 screenshot kanan */
                <div className="santan-body">
                  <div className="santan-info">
                    <p className="santan-title">{p.title}</p>
                    <span className="santan-badge">Real-Client PBL</span>
                    <ul className="santan-features">
                      {p.features && p.features.map((f) => (
                        <li key={f}><span className="santan-check">✓</span>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="santan-tablet-wrap">
                    <div className="santan-tablet">
                      <div className="santan-tablet-bar"><span className="santan-cam" /></div>
                      <div className="santan-screen"
                        style={{ backgroundImage: p.images?.[0] ? `url('${p.images[0]}')` : "none" }} />
                    </div>
                    <div className="santan-mini-frame">
                      <div className="santan-mini-screen"
                        style={{ backgroundImage: p.images?.[1] ? `url('${p.images[1]}')` : "none" }} />
                    </div>
                  </div>
                </div>

              ) : idx === 2 ? (
                /* Veliluxe Beauty: iMac rose gold + dekorasi lucu + info kanan */
                <div className="velilux-body">
                  {/* KIRI: background dekoratif + iMac rose gold */}
                  <div className="velilux-imac-wrap">
                    {/* Elemen dekorasi floating */}
                    <span className="vlx-deco vlx-deco-1">✦</span>
                    <span className="vlx-deco vlx-deco-2">✿</span>
                    <span className="vlx-deco vlx-deco-3">♡</span>
                    <span className="vlx-deco vlx-deco-4">✦</span>
                    <span className="vlx-deco vlx-deco-5">✿</span>

                    {/* iMac rose gold */}
                    <div className="velilux-imac">
                      {/* Screen/lid */}
                      <div className="velilux-imac-screen">
                        <div className="velilux-imac-cam-bar">
                          <span className="velilux-imac-cam" />
                        </div>
                        <div
                          className="velilux-imac-display"
                          style={{ backgroundImage: p.images?.[0] ? `url('${p.images[0]}')` : "none" }}
                        />
                      </div>
                      {/* iMac thick chin */}
                      <div className="velilux-imac-chin" />
                      {/* Stand */}
                      <div className="velilux-imac-neck" />
                      <div className="velilux-imac-base" />
                    </div>

                    {/* Floating mini screenshot — Data Produk */}
                    <div
                      className="velilux-float-shot"
                      style={{ backgroundImage: p.images?.[1] ? `url('${p.images[1]}')` : "none" }}
                    />
                  </div>

                  {/* KANAN: info panel pink */}
                  <div className="velilux-info">
                    <p className="velilux-title">{p.title}</p>
                    <span className="velilux-badge">Course Project</span>
                    <ul className="velilux-features">
                      {p.features && p.features.map((f) => (
                        <li key={f}><span className="velilux-check">✓</span>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              ) : idx === 3 ? (
                /* Bengkel Pro: monitor PC dark/metalik — tema otomotif maskulin */
                <div className="bengkel-body">
                  {/* KIRI: monitor PC dark + dekorasi gear */}
                  <div className="bengkel-monitor-wrap">
                    {/* Dekorasi gear floating */}
                    <span className="bkl-deco bkl-deco-1">⚙</span>
                    <span className="bkl-deco bkl-deco-2">⚙</span>
                    <span className="bkl-deco bkl-deco-3">🔧</span>

                    {/* Monitor PC */}
                    <div className="bengkel-monitor">
                      {/* Bezel monitor */}
                      <div className="bengkel-monitor-screen">
                        <div className="bengkel-monitor-bar">
                          <span className="bkl-dot bkl-dot-r" />
                          <span className="bkl-dot bkl-dot-y" />
                          <span className="bkl-dot bkl-dot-g" />
                        </div>
                        {/* Screenshots side by side di dalam layar */}
                        <div className="bengkel-split-screen">
                          <div className="bengkel-shot bengkel-shot-main"
                            style={{ backgroundImage: p.images?.[0] ? `url('${p.images[0]}')` : "none" }} />
                          <div className="bengkel-shot bengkel-shot-sub"
                            style={{ backgroundImage: p.images?.[1] ? `url('${p.images[1]}')` : "none" }} />
                        </div>
                      </div>
                      {/* Monitor stand */}
                      <div className="bengkel-monitor-neck" />
                      <div className="bengkel-monitor-base" />
                    </div>
                  </div>

                  {/* KANAN: info panel dark oranye */}
                  <div className="bengkel-info">
                    <p className="bengkel-title">{p.title}</p>
                    <span className="bengkel-badge">Desktop App</span>
                    <ul className="bengkel-features">
                      {p.features && p.features.map((f) => (
                        <li key={f}><span className="bengkel-check">▶</span>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              ) : idx === 4 ? (
                /* Academic Hub: 2 iPhone 18 Pro Max Burgundy — pink elegant */
                <div className="academic-body">
                  {/* KIRI: background rose elegant + 2 iPhone */}
                  <div className="academic-phone-wrap">
                    {/* Bokeh lingkaran + sparkle dekorasi */}
                    <span className="ac-bokeh ac-bokeh-1" />
                    <span className="ac-bokeh ac-bokeh-2" />
                    <span className="ac-bokeh ac-bokeh-3" />
                    <span className="ac-spark ac-spark-1">✦</span>
                    <span className="ac-spark ac-spark-2">✦</span>
                    <span className="ac-spark ac-spark-3">✿</span>

                    {/* iPhone belakang — offset, blur sedikit */}
                    <div className="academic-phone academic-phone-back">
                      <div className="academic-island" />
                      <div className="academic-screen"
                        style={{ backgroundImage: p.images?.[1] ? `url('${p.images[1]}')` : "none" }} />
                      <div className="academic-btn-power" />
                      <div className="academic-btn-vol" />
                      <div className="academic-usbc" />
                    </div>

                    {/* iPhone depan — utama */}
                    <div className="academic-phone academic-phone-front">
                      <div className="academic-island" />
                      <div className="academic-screen"
                        style={{ backgroundImage: p.images?.[0] ? `url('${p.images[0]}')` : "none" }} />
                      <div className="academic-btn-power" />
                      <div className="academic-btn-vol" />
                      <div className="academic-usbc" />
                    </div>
                  </div>

                  {/* KANAN: info panel pink elegant */}
                  <div className="academic-info">
                    <p className="academic-eyebrow">Mobile App</p>
                    <p className="academic-title">{p.title}</p>
                    <span className="academic-badge">Flutter</span>
                    <ul className="academic-features">
                      {p.features && p.features.map((f) => (
                        <li key={f}><span className="academic-check">✦</span>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              ) : idx === 5 ? (
                /* Santan Ardafa — Branding: elegant pink mockup book */
                <div className="branding-body">
                  {/* KIRI: pink mockup book with logo, packaging, infographic */}
                  <div className="branding-mockup-wrap">
                    {/* Decorative lilac sparkles */}
                    <span className="brnd-spark brnd-spark-1">✦</span>
                    <span className="brnd-spark brnd-spark-2">✿</span>
                    <span className="brnd-spark brnd-spark-3">✦</span>

                    {/* Book mockup */}
                    <div className="branding-book">
                      <div className="branding-cover">
                        <div className="branding-cover-img"
                          style={{ backgroundImage: p.images?.[0] ? `url('${p.images[0]}')` : "none" }} />
                      </div>
                      <div className="branding-pages">
                        <div className="branding-page left"
                          style={{ backgroundImage: p.images?.[1] ? `url('${p.images[1]}')` : "none" }} />
                        <div className="branding-page right"
                          style={{ backgroundImage: p.images?.[2] ? `url('${p.images[2]}')` : "none" }} />
                      </div>
                    </div>
                  </div>

                  {/* KANAN: info panel pink elegant */}
                  <div className="branding-info">
                    <p className="branding-eyebrow">Graphic Design</p>
                    <p className="branding-title">{p.title}</p>
                    <span className="branding-badge">Adobe Suite</span>
                    <ul className="branding-features">
                      {p.features && p.features.map((f) => (
                        <li key={f}><span className="branding-check">✦</span>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              ) : (
                /* Default: thumbnail foto */
                <div className="project-img"
                  style={{ backgroundImage: `url('${p.image}'), linear-gradient(135deg, #f6e3e5, #efd2d6)` }} />
              )}

              <p>{p.desc}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div id="docs" className="doc-buttons">
          <a className="btn btn-outline" href={profile.cv}>View CV</a>
          <a className="btn btn-outline" href={profile.social}>Social Media</a>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="cta">
          <span className="cta-deco cta-deco-1">✦</span>
          <span className="cta-deco cta-deco-2">✿</span>
          <span className="cta-deco cta-deco-3">◆</span>
          <p className="cta-eyebrow">Let&apos;s Collaborate</p>
          <h2>Let&apos;s discuss and build something amazing together</h2>
          <p className="cta-sub">Open for freelance projects, collaborations, and creative discussions.</p>
          <a className="btn btn-cta" href={profile.waLink} target="_blank" rel="noopener noreferrer">💬 Chat via WhatsApp</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">{profile.name}</h3>
            <p>
              A developer focused on clean interfaces and functional digital experiences.
              Let&apos;s connect and bring your ideas to life.
            </p>
            <div className="social">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                {/* GitHub icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile App</li>
              <li>UI/UX Design</li>
              <li>Information Systems</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{profile.location}</li>
              <li>{profile.phone}</li>
              <li>{profile.email}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All Rights Reserved.</span>
        </div>
      </footer>
    </main>
  );
}