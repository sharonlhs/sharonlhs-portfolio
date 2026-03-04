<template>
  <div class="home">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-eyebrow">Sharon Lim — Frontend Developer</p>

        <h1 class="hero-headline">
          <span class="hero-line">Craft that lives</span>
          <span class="hero-line italic">in the details.</span>
        </h1>

        <p class="hero-sub">
          I design and build digital experiences that are precise,
          considered, and quietly beautiful.
        </p>

        <div class="hero-actions">
          <NuxtLink to="/professional/projects" class="btn-primary">View My Work</NuxtLink>
          <NuxtLink to="/professional/contact" class="btn-ghost">Get in Touch</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats strip -->
    <div class="stats-strip">
      <div class="stat">
        <span class="stat-num">3+</span>
        <span class="stat-label">Years experience</span>
      </div>
      <div class="stat-divider" />
      <div class="stat">
        <span class="stat-num">20+</span>
        <span class="stat-label">Projects shipped</span>
      </div>
      <div class="stat-divider" />
      <div class="stat">
        <span class="stat-num">Vue · Nuxt · React</span>
        <span class="stat-label">Primary stack</span>
      </div>
    </div>

    <!-- Featured Projects -->
    <section class="projects-section">
      <div class="section-header">
        <span class="section-tag">Work</span>
        <h2 class="section-title">Selected Projects</h2>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project?.title"
          :image="project?.image"
          :title="project?.title"
          :description="project?.description"
          :technologies="project?.technologies"
          :link="project?.link"
        />

        <!-- Placeholder cards if no projects yet -->
        <template v-if="!featuredProjects?.length">
          <div class="project-placeholder" v-for="n in 2" :key="n">
            <div class="placeholder-img" />
            <div class="placeholder-text" />
            <div class="placeholder-text short" />
          </div>
        </template>
      </div>

      <NuxtLink to="/professional/projects" class="view-all">
        All Projects <span class="arrow">→</span>
      </NuxtLink>
    </section>

    <!-- About Teaser -->
    <section class="about-section">
      <div class="about-inner">
        <div class="about-label">About</div>
        <div class="about-content">
          <h2 class="about-headline">
            I write clean code and<br />
            <em>obsess over the small things.</em>
          </h2>
          <div class="about-body">
            <p>
              Hi, I'm Sharon — a frontend developer focused on building
              interfaces that are as thoughtful under the hood as they are
              on the surface. I care about accessibility, performance, and
              the kind of polish that makes people feel something without
              knowing why.
            </p>
            <p>
              Currently working with Vue, Nuxt, and modern CSS —
              and always exploring what's next.
            </p>
            <NuxtLink to="/professional/about" class="text-link">
              More about me <span class="arrow">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <p class="cta-pre">Have a project in mind?</p>
      <h2 class="cta-headline">Let's make something<br /><em>worth remembering.</em></h2>
      <NuxtLink to="/professional/contact" class="btn-primary large">Start a Conversation</NuxtLink>
    </section>
  </div>
</template>

<script setup>
const { data: featuredProjects } = await useFetch('/api/projects', {
  query: { featured: 'true' }
})
</script>

<style scoped>
/* ── Tokens — mapped to global theme variables ───── */
.home {
  --ink:      var(--color-text);
  --ink-muted:var(--color-muted);
  --ink-faint:var(--color-muted-faint);
  --surface:  var(--color-background);
  --surface-2:var(--color-background-white);
  --accent:   var(--color-accent);
  --accent-dk:var(--color-accent);
  --border:   var(--color-border);
  --radius:   6px;

  font-family: 'DM Sans', sans-serif;
  background: var(--surface);
  color: var(--ink);
}

/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 4rem;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.hero-inner {
  max-width: 860px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) both;
}

.hero-rule {
  position: absolute;
  left: 0; right: 0;
  height: 1px;
  background: var(--border);
  pointer-events: none;
  z-index: 1;
}

.hero-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 2.5rem;
  animation: fadeUp 1s 0.1s cubic-bezier(0.16,1,0.3,1) both;
}

.hero-headline {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(3.5rem, 9vw, 7.5rem);
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
}

.hero-line {
  display: block;
  animation: fadeUp 1s 0.2s cubic-bezier(0.16,1,0.3,1) both;
}

.hero-line.italic {
  font-style: italic;
  color: var(--accent-dk);
  animation-delay: 0.3s;
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--ink-muted);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 3rem;
  font-weight: 300;
  animation: fadeUp 1s 0.4s cubic-bezier(0.16,1,0.3,1) both;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeUp 1s 0.5s cubic-bezier(0.16,1,0.3,1) both;
}

/* ── Buttons ─────────────────────────────────────── */
.btn-primary {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius);
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}
.btn-primary::after { display: none; }
.btn-primary:hover { opacity: 0.85; transform: translateY(-1px); }
.btn-primary.large { padding: 1rem 2.5rem; font-size: 1rem; }

.btn-ghost {
  display: inline-block;
  background: transparent;
  color: var(--color-text);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-text);
  text-decoration: none;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.btn-ghost::after { display: none; }
.btn-ghost:hover {
  background: var(--color-text);
  color: var(--color-background);
  transform: translateY(-1px);
}

/* ── Stats strip ─────────────────────────────────── */
.stats-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-num {
  font-family: 'DM Serif Display', serif;
  font-size: 1.5rem;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-faint);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* ── Projects ────────────────────────────────────── */
.projects-section {
  padding: 6rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.section-tag {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-faint);
}

.section-title {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Placeholder cards */
.project-placeholder {
  background: var(--surface-2);
  border-radius: var(--radius);
  overflow: hidden;
  padding: 1.5rem;
  border: 1px solid var(--border);
}
.placeholder-img {
  width: 100%; height: 200px;
  background: var(--border);
  border-radius: 4px;
  margin-bottom: 1rem;
  animation: shimmer 2s linear infinite;
  background: linear-gradient(90deg, var(--surface-2) 25%, var(--border) 50%, var(--surface-2) 75%);
  background-size: 200% auto;
}
.placeholder-text {
  height: 14px; background: var(--border);
  border-radius: 4px; margin-bottom: 0.6rem;
  animation: shimmer 2s linear infinite;
  background: linear-gradient(90deg, var(--surface-2) 25%, var(--border) 50%, var(--surface-2) 75%);
  background-size: 200% auto;
}
.placeholder-text.short { width: 60%; }

@keyframes shimmer {
  from { background-position: 200% center; }
  to   { background-position: -200% center; }
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.view-all:hover { color: var(--accent-dk); border-color: var(--accent-dk); }

/* ── About ───────────────────────────────────────── */
.about-section {
  background: var(--surface-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 6rem 2rem;
}

.about-inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 4rem;
  align-items: start;
}

.about-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-faint);
  padding-top: 0.6rem;
}

.about-headline {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 2rem;
}

.about-headline em {
  font-style: italic;
  color: var(--accent-dk);
}

.about-body p {
  font-size: 1rem;
  color: var(--ink-muted);
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 1.25rem;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.text-link:hover { color: var(--accent-dk); border-color: var(--accent-dk); }

/* ── CTA ─────────────────────────────────────────── */
.cta-section {
  padding: 8rem 2rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-pre {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-faint);
  margin-bottom: 1.5rem;
}

.cta-headline {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 3rem;
}

.cta-headline em {
  font-style: italic;
  color: var(--accent-dk);
}

/* ── Shared ──────────────────────────────────────── */
.arrow { display: inline-block; transition: transform 0.2s; }
a:hover .arrow { transform: translateX(4px); }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .about-inner { grid-template-columns: 1fr; gap: 1.5rem; }
  .stat-divider { display: none; }
  .stats-strip { gap: 1.5rem; }
}
</style>