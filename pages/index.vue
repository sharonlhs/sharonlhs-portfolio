<template>
  <div class="home">

    <!-- Year badge -->
    <span class="year-badge">{{ new Date().getFullYear() }}</span>

    <!-- Nav row -->
    <nav class="nav">
      <span class="nav-logo">SL</span>
      <div class="nav-links">
        <!-- <NuxtLink to="/unhinged" class="nav-link">Unhinged</NuxtLink> -->
        <NuxtLink to="/professional" class="nav-link nav-link--cta">See More</NuxtLink>
      </div>
    </nav>

    <!-- Hero -->
    <main class="hero">

      <!-- Left column: headline + media strip -->
      <div class="hero-left">
        <p class="eyebrow">Builder · Designer · Chaos Engineer</p>

        <h1 class="headline">
          I build things<br />
          that shouldn't<br />
          work —<br />
          <em>but do.</em>
        </h1>

        <!-- Interests strip -->
        <p class="interests-label">into these</p>
        <div class="media-strip">
          <div class="media-chip media-chip--wide">
            <NuxtImg src="/images/2026/fried-chicken.jpg" class="chip-img chip-img--cover" />
            <span class="chip-label">fried chicken</span>
          </div>
          <div class="media-chip media-chip--wide">
            <NuxtImg src="/images/2026/gif/cook.gif" class="chip-img" />
            <span class="chip-label">cooking</span>
          </div>
          <!-- <div class="media-chip media-chip--wide">
            <NuxtImg src="/images/2026/golf.png" class="chip-img" />
            <span class="chip-label">golf</span>
          </div> -->
        </div>
      </div>

      <!-- Right column: polaroid stack -->
      <div class="hero-right">
        <div class="stack-wrapper">
          <div class="polaroid-stack" @click="cycleCards">
            <div
              v-for="(card, i) in cards"
              :key="card.src"
              class="polaroid"
              :style="getCardStyle(i)"
            >
              <NuxtImg :src="card.src" class="polaroid-img" :class="{ 'polaroid-img--cover': card.cover }" :style="card.rotate ? { transform: `rotate(${card.rotate})` } : {}" />
              <span class="polaroid-caption">{{ card.caption }}</span>
            </div>
          </div>
          <span class="stack-hint" @click="cycleCards">shuffle ↻</span>
        </div>
      </div>
    </main>

    <!-- Decorative elements -->
    <NuxtImg src="/images/2026/skimski.png"          class="deco deco--skimski" />
    <NuxtImg src="/images/2026/gif/yellow-sparks.gif" class="deco deco--sparks" />
    <NuxtImg src="/images/2026/gif/fireworks.gif"     class="deco deco--fireworks" />
    <NuxtImg src="/images/2026/gif/sparkle.gif"       class="deco deco--sparkle" />

    <!-- Footer -->
    <footer class="footer">
      <span>Sharon Lim</span>
      <span class="footer-dot">·</span>
      <span class='footer-quote'>making it up as i go c: </span>
      <span class="footer-dot">·</span>
      <span>{{ new Date().getFullYear() }}</span>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({ layout: 'creative' })

const cards = ref([
  { src: '/images/2026/gif/bunny-work.gif', caption: 'grind mode',   cover: false },
  { src: '/images/2026/duck-with-cone.png', caption: 'mood',         cover: false },
  { src: '/images/2026/guzheng.jpeg',       caption: 'weekends',     cover: true,  rotate: '90deg' },
  { src: '/images/2026/lily.png',           caption: 'lily 🌸',      cover: true  },
  { src: '/images/2026/me.jpeg',            caption: 'sharon lim ✦', cover: true  },
])

// Slot 0 = furthest back, slot 4 = front
const slotStyles = [
  { width: '175px', height: '215px', top: '8%',  left: '-2%',  rotate: '-14deg', zIndex: 1, opacity: 0.55, scale: 0.87 },
  { width: '185px', height: '228px', top: '12%', right: '-4%', rotate: '11deg',  zIndex: 2, opacity: 0.68, scale: 0.90 },
  { width: '200px', height: '245px', top: '58%', left: '2%',   rotate: '-8deg',  zIndex: 3, opacity: 0.78, scale: 0.93 },
  { width: '215px', height: '265px', top: '55%', right: '2%',  rotate: '6deg',   zIndex: 4, opacity: 0.9,  scale: 0.96 },
  { width: '270px', height: '335px', top: '50%', left: '50%',  rotate: '-2deg',  zIndex: 5, opacity: 1,    scale: 1,   translateCenter: true },
]

function getCardStyle(i) {
  const slot = slotStyles[i]
  const transforms = [`rotate(${slot.rotate})`, `scale(${slot.scale})`]
  if (slot.translateCenter) transforms.push('translate(-50%, -50%)')
  const style = {
    width: slot.width,
    height: slot.height,
    top: slot.top,
    zIndex: slot.zIndex,
    opacity: slot.opacity,
    transform: transforms.join(' '),
    transition: 'all 0.6s cubic-bezier(0.34, 1.15, 0.64, 1)',
  }
  if (slot.left  !== undefined) style.left  = slot.left
  if (slot.right !== undefined) style.right = slot.right
  return style
}

function cycleCards() {
  const front = cards.value.pop()
  cards.value.unshift(front)
}
</script>

<style lang="scss">
/* ── Tokens ──────────────────────────────────────── */
.home {
  --bg:      #0d0d0d;
  --surface: #141414;
  --border:  rgba(255,255,255,0.08);
  --ink:     #f5f0e8;
  --ink-2:   #a09d97;
  --accent:  #e8d5b0;      /* warm cream */
  --accent2: #c9a96e;      /* gold */
  --radius:  12px;

  position: relative;
  min-height: 100svh;
  background: var(--bg);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

/* ── Nav ─────────────────────────────────────────── */
.nav {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-2);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: color 0.2s;

  &:hover { color: var(--ink); }

  &--cta {
    color: var(--bg);
    background: var(--accent);
    font-weight: 600;

    &:hover {
      background: var(--accent2);
      color: var(--bg);
    }
  }
}

.nav-link::after {
  display: none;
}

/* ── Year badge ──────────────────────────────────── */
.year-badge {
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  z-index: 30;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--ink-2);
  display: none; /* nav handles branding — hide duplicate */
}

/* ── Hero layout ─────────────────────────────────── */
.hero {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: calc(100svh - 64px - 48px); /* minus nav + footer */
  padding: 3.5rem 2.5rem 2rem;
}

/* ── Left column ─────────────────────────────────── */
.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  border-right: 1px solid var(--border);
}

.eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent2);
  margin-bottom: 1.5rem;
}

.headline {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 3rem;

  em {
    font-style: italic;
    color: var(--accent2);
  }
}

/* ── Media strip ─────────────────────────────────── */
.media-strip {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.media-chip {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
  flex-shrink: 0;
  width: 80px;
  height: 80px;

  &--wide {
    width: 140px;
  }
}

.chip-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;

  &--cover {
    object-fit: cover;
  }
}

.chip-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  color: var(--ink);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  text-align: center;
  padding: 3px 4px;
  text-transform: uppercase;
}

/* ── Player row ──────────────────────────────────── */
.player-row {
  display: flex;
  align-items: center;
  width: fit-content;
}


/* ── Right column ────────────────────────────────── */
.hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;
}

/* ── Polaroid stack ───────────────────────────────── */
.polaroid-stack {
  position: relative;
  width: 380px;
  height: 480px;
  cursor: pointer;
}

.polaroid {
  position: absolute;
  background: #f5f0e8;
  padding: 12px 12px 40px;
  border-radius: 3px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  will-change: transform, opacity;
}

.polaroid-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #e8e2d8;
  flex: 1;
  image-orientation: from-image;
}

.polaroid-img--cover {
  object-fit: cover;
}

.polaroid-caption {
  display: block;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: #4a4540;
  margin-top: 8px;
  text-transform: lowercase;
}

.stack-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.stack-hint {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-2);
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.25s, color 0.25s;
  user-select: none;
  white-space: nowrap;
  padding: 0.5rem 0;
}

.stack-hint:hover {
  opacity: 1;
  color: var(--accent2);
}

/* ── Interests label ─────────────────────────────── */
.interests-label {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-2);
  margin-bottom: 0.6rem;
  opacity: 0.7;
}

/* ── Decorative elements ─────────────────────────── */
.deco {
  position: fixed;
  pointer-events: none;
  z-index: 1;
}

.deco--skimski {
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  opacity: 0.18;
  filter: grayscale(0.3);
}

.deco--sparks {
  bottom: 3rem;
  left: 1rem;
  width: 140px;
  opacity: 0.25;
  mix-blend-mode: screen;
}

.deco--fireworks {
  top: 3.5rem;
  right: 1.5rem;
  width: 100px;
  opacity: 0.3;
  mix-blend-mode: screen;
}

.deco--sparkle {
  bottom: 4rem;
  right: 3rem;
  width: 80px;
  opacity: 0.2;
  mix-blend-mode: screen;
}

/* ── Subtle background texture ───────────────────── */
.home::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 70% 40%, rgba(200,169,110,0.05) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 20% 80%, rgba(100,80,180,0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ── Footer ──────────────────────────────────────── */
.footer {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 2.5rem;
  border-top: 1px solid var(--border);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--ink-2);
}

.footer-dot { opacity: 0.4; }
.footer-quote { color: var(--accent2); font-weight: 600; letter-spacing: 0.1em; }

/* ── Responsive ──────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 2rem 1.25rem;
    gap: 2.5rem;
  }

  .hero-left {
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding-bottom: 2.5rem;
  }

  .hero-right {
    padding-left: 0;
    min-height: 420px;
  }

  .footer {
    padding: 0.75rem 1.25rem;
    margin-top: 20px;
  }

  .headline {
    font-size: 2.8rem;
  }

  .player-row {
    display: none;
  }

  .stack-wrapper {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }

  .stack-hint {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    padding: 0 0 0.5rem 0;
    opacity: 0.6;
    width: 100%;
    text-align: center;
  }

  .polaroid-stack {
    position: relative;
    width: 100%;
    height: 480px;
    cursor: pointer;
  }
}
</style>