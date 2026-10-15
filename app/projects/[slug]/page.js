import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const p = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const bg = (src) => ({
    backgroundImage: `url('${src}'), linear-gradient(135deg, #f6e3e5, #efd2d6)`,
  });

  return (
    <main className="detail">
      <Link href="/#portfolio" className="back">← Kembali ke Portofolio</Link>

      <header className="detail-head">
        <p className="label">{p.category}</p>
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
      </header>

      {/* ── Cover Section ── */}
      {p.slug === "academic-hub" ? (
        /* Academic Hub: kiri overview Figma stacked, kanan HP portrait individual */
        <div className="ac-detail-cover">
          {/* KIRI: 2 gambar overview Figma memanjang, stacked atas-bawah */}
          <div className="ac-detail-overviews">
            {p.overviews && p.overviews.map((src, i) => (
              <div
                key={i}
                className="ac-detail-overview-img"
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>

          {/* KANAN: HP portrait individual scrollable */}
          <div className="ac-detail-phones">
            {p.images && p.images.map((src, i) => (
              <div key={i} className="ac-detail-phone">
                {/* iPhone burgundy mini frame */}
                <div className="ac-ph-shell">
                  <div className="ac-ph-island" />
                  <div
                    className="ac-ph-screen"
                    style={{ backgroundImage: `url('${src}')` }}
                  />
                  <div className="ac-ph-usbc" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : p.images && p.images.length > 1 ? (
        <div className="cover-collage">
          {p.images.slice(0, 4).map((src, i) => (
            <div key={i} className="collage-device">
              <div className="collage-device-bar">
                <span className="collage-cam" />
              </div>
              <div
                className="collage-screen"
                style={{ backgroundImage: `url('${src}'), linear-gradient(135deg, #d1fae5, #a7f3d0)` }}
              />
              <div className="collage-device-btm">
                <span className="collage-home" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cover" style={bg(p.image)} />
      )}

      <section className="detail-grid">
        <div className="about-text">
          <h2>Tentang Proyek</h2>
          {p.about.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <aside className="info">
          <h3>Info Proyek</h3>
          <p><strong>Klien:</strong> {p.client}</p>
          <p><strong>Tahun:</strong> {p.year}</p>
          <p><strong>Peran:</strong> {p.role}</p>
          {p.demo !== "#" && (
            <a className="demo-link" href={p.demo} target="_blank" rel="noreferrer">
              Lihat Demo ↗
            </a>
          )}
        </aside>
      </section>

      <h2 className="center-title">Teknologi</h2>
      <div className="tech-grid">
        {p.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {/* Galeri hanya untuk non academic-hub */}
      {p.slug !== "academic-hub" && (
        <>
          <h2 className="center-title">Galeri Proyek</h2>
          <div className="gallery">
            {p.gallery.map((src, i) => (
              <div key={i} className="shot" style={bg(src)} />
            ))}
          </div>
        </>
      )}

      <div className="pager">
        {prev ? <Link href={`/projects/${prev.slug}`}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/projects/${next.slug}`}>{next.title} →</Link> : <span />}
      </div>
    </main>
  );
}