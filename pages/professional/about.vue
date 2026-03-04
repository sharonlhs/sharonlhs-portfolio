<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">

          <!-- Header -->
          <div class="about-header">
            <span class="section-tag">About</span>
            <h1 class="about-title">Sharon Lim</h1>
            <p class="about-role">Frontend Developer & Designer</p>
          </div>

          <!-- Top: Photo + Intro -->
          <div class="intro-grid">
            <div class="photo-col">
              <div class="photo-wrap">
                <img
                  src="/images/about/me.jpeg"
                  alt="Sharon Lim"
                  class="photo"
                />
              </div>
              <NuxtLink to="/professional/contact" class="contact-btn">
                Get in Touch
              </NuxtLink>
            </div>

            <div class="intro-col">
              <p class="intro-text">
                Hello! I'm Sharon, a designer and developer with a passion for
                creating beautiful, functional, and accessible digital experiences.
                After studying design and software engineering, I've spent the last
                two years helping companies of all sizes establish their digital presence.
              </p>
              <p class="intro-text">
                I believe in minimalism not just as an aesthetic choice, but as a
                core philosophy in how digital products should work. My goal is always
                to create experiences that are intuitive, accessible, and joyful to use.
              </p>
              <p class="intro-text">
                Shortly after, I joined a startup where I honed my skills in modern
                web development. Since then, I've had the privilege of working with
                diverse teams and clients on a variety of interesting projects.
              </p>
            </div>
          </div>

          <div class="divider" />

          <!-- Skills -->
          <div class="section-block">
            <div class="block-label">Skills</div>
            <div class="block-content">
              <h2 class="block-title">What I work with</h2>
              <div class="skills-grid">
                <div class="skill-group">
                  <h3 class="skill-heading">Frontend</h3>
                  <ul class="skill-list">
                    <li>HTML, CSS, JavaScript (ES6+)</li>
                    <li>Vue.js, React, Nuxt.js, Next.js</li>
                    <li>Tailwind CSS, SCSS</li>
                    <li>Responsive design</li>
                  </ul>
                </div>
                <div class="skill-group">
                  <h3 class="skill-heading">Backend</h3>
                  <ul class="skill-list">
                    <li>Node.js, NestJS</li>
                    <li>Laravel</li>
                    <li>PostgreSQL</li>
                    <li>RESTful APIs</li>
                    <li>Authentication flows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="divider" />

          <!-- Journey -->
          <div class="section-block">
            <div class="block-label">Experience</div>
            <div class="block-content">
              <h2 class="block-title">My Journey</h2>
              <div class="timeline">

                <div class="timeline-item">
                  <div class="timeline-dot" />
                  <div class="timeline-body">
                    <div class="timeline-meta">
                      <h3 class="timeline-role">Web Developer</h3>
                      <span class="timeline-date">May 2023 — Present</span>
                    </div>
                    <a
                      href="https://artisan.com.my/"
                      target="_blank"
                      class="timeline-company"
                    >Agmo Artisan Sdn Bhd ↗</a>
                    <p class="timeline-desc">
                      Leading frontend development for enterprise applications,
                      mentoring junior developers, and implementing best practices
                      for accessibility and performance.
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-dot" />
                  <div class="timeline-body">
                    <div class="timeline-meta">
                      <h3 class="timeline-role">Product Management Intern</h3>
                      <span class="timeline-date">Feb 2023 — Apr 2023</span>
                    </div>
                    <a
                      href="https://www.pitchin.my"
                      target="_blank"
                      class="timeline-company"
                    >Pitch Platforms Sdn Bhd ↗</a>
                    <p class="timeline-desc">
                      Contributed to product strategy by writing PRDs, conducting
                      customer research, aligning cross-functional teams, and leading
                      content planning for the
                      <a href="https://www.pitchin.my/learn" target="_blank" class="inline-link">Learning Portal</a>.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="divider" />

          <!-- Outside work -->
          <div class="section-block">
            <div class="block-label">Life</div>
            <div class="block-content">
              <h2 class="block-title">When I'm not coding</h2>
              <p class="intro-text">
                You'll find me crocheting cozy creations, playing the piano,
                or exploring new cafes and foods.
              </p>
              <div class="hobby-tags">
                <span class="tag">🧶 Crocheting</span>
                <span class="tag">🎹 Piano</span>
                <span class="tag">☕ Cafe hopping</span>
                <span class="tag">🍜 Food exploring</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// About page
</script>

<style scoped>
/* ── Header ─────────────────────────────────── */
.about-header {
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-muted);
  margin-bottom: 1rem;
}

.about-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.about-role {
  font-size: 1rem;
  color: var(--color-muted);
  font-weight: 300;
  letter-spacing: 0.04em;
}

/* ── Intro grid ──────────────────────────────── */
.intro-grid {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;
}

.photo-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  position: sticky;
  top: 88px;
}

.photo-wrap {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.photo-wrap:hover .photo {
  transform: scale(1.03);
}

.contact-btn {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 0.7rem 1.25rem;
  background: var(--color-accent);
  color: #fff;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}

.contact-btn::after { display: none; }
.contact-btn:hover { opacity: 0.85; transform: translateY(-1px); color: #fff; }

.intro-col {
  padding-top: 0.25rem;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  font-weight: 300;
  margin-bottom: 1.25rem;
  opacity: 0.85;
}

/* ── Divider ─────────────────────────────────── */
.divider {
  height: 1px;
  background: var(--color-border);
  margin: 3rem 0;
}

/* ── Section blocks ──────────────────────────── */
.section-block {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 3rem;
  align-items: start;
}

.block-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-muted);
  padding-top: 0.4rem;
}

.block-title {
  font-family: 'DM Serif Display', serif;
  font-size: 1.75rem;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: 2rem;
}

/* ── Skills ──────────────────────────────────── */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.skill-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  space-y: 0.5rem;
}

.skill-list li {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--color-border);
  font-weight: 300;
}

.skill-list li:last-child { border-bottom: none; }

/* ── Timeline ────────────────────────────────── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.timeline-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.timeline-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  margin-top: 0.5rem;
}

.timeline-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.timeline-role {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
}

.timeline-date {
  font-size: 0.75rem;
  color: var(--color-muted);
  letter-spacing: 0.04em;
}

.timeline-company {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--color-accent);
  text-decoration: none;
  margin-bottom: 0.6rem;
  transition: opacity 0.2s;
}

.timeline-company::after { display: none; }
.timeline-company:hover { opacity: 0.7; }

.timeline-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--color-text);
  opacity: 0.75;
  font-weight: 300;
}

.inline-link {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* ── Hobbies ─────────────────────────────────── */
.hobby-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.tag {
  padding: 0.4rem 1rem;
  background: var(--color-background-white);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--color-text);
}

/* ── Responsive ──────────────────────────────── */
@media (max-width: 768px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .photo-col {
    position: static;
    flex-direction: row;
    align-items: center;
  }

  .photo-wrap {
    width: 120px;
    flex-shrink: 0;
  }

  .contact-btn {
    width: auto;
  }

  .section-block {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .block-label {
    padding-top: 0;
  }
}
</style>