<template>
  <header class="site-header">
    <div class="container mx-auto px-4 flex justify-between items-center h-full">
      <NuxtLink to="/" class="logo">
        SL
      </NuxtLink>

      <div class="flex items-center gap-6">
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="nav-link"
                :class="{ active: $route.path === item.path }"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Easter egg -->
        <NuxtLink to="/unhinged" class="easter-egg" title="👀">
          <span class="egg-icon">✦</span>
          <span class="egg-tooltip">you weren't supposed to find this</span>
        </NuxtLink>

        <ThemeToggle />

        <button
          v-if='isMobile'
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger md:hidden"
          :class="{ open: isMenuOpen }"
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="menu">
      <div v-if="isMenuOpen" class="mobile-menu">
        <nav class="container mx-auto px-4 py-6">
          <ul class="space-y-1">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="mobile-link"
                @click="isMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Mobile easter egg -->
          <NuxtLink to="/unhinged" class="mobile-easter-egg" @click="isMenuOpen = false">
            <span class="mobile-egg-text" aria-hidden="true">✦ &nbsp;you weren't supposed to find this</span>
            <span class="mobile-egg-text glitch-1" aria-hidden="true">✦ &nbsp;you weren't supposed to find this</span>
            <span class="mobile-egg-text glitch-2" aria-hidden="true">✦ &nbsp;you weren't supposed to find this</span>
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)
const route = useRoute()
const isMobile = useBreakpoints().isMobile

// Close menu on route change
watch(() => route.path, () => { isMenuOpen.value = false })

const navItems = [
  { name: 'Home',     path: '/professional/' },
  { name: 'About',    path: '/professional/about' },
  { name: 'Projects', path: '/professional/projects' },
  { name: 'Contact',  path: '/professional/contact' },
]

onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) isMenuOpen.value = false
    })
  }
})
</script>

<style scoped>
.site-header {
  height: 64px;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 50;
  /* Frosted paper effect */
  background-color: color-mix(in srgb, var(--color-background) 85%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.logo {
  font-family: 'DM Serif Display', serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.04em;
  text-decoration: none;
}

.logo::after { display: none; }

/* Nav links */
.nav-link {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}

.nav-link::after { display: none; }

.nav-link:hover,
.nav-link.active {
  color: var(--color-text);
}

.nav-link.active::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-accent);
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.mobile-link {
  display: block;
  padding: 0.75rem 0;
  font-size: 1rem;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  transition: color 0.2s;
}

.mobile-link:last-child { border-bottom: none; }
.mobile-link:hover { color: var(--color-accent); }
.mobile-link::after { display: none; }

/* Menu transition */
.menu-enter-active,
.menu-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; transform: translateY(-8px); }

/* ── Easter egg ──────────────────────────────── */
.easter-egg {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
  text-decoration: none;
}

.easter-egg::after { display: none; }

.egg-icon {
  font-size: 0.75rem;
  color: var(--color-muted);
  display: block;
  animation: glitch-idle 6s ease-in-out infinite;
  transition: color 0.2s;
}

.easter-egg:hover .egg-icon {
  color: #d946ef;
  animation: glitch-hover 0.4s steps(1) infinite;
}

.egg-tooltip {
  position: absolute;
  bottom: -30px;
  right: 0;
  white-space: nowrap;
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  color: #d946ef;
  background: var(--color-background);
  border: 1px solid #d946ef;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-4px);
  transition: opacity 0.2s, transform 0.2s;
  font-family: monospace;
}

.easter-egg:hover .egg-tooltip {
  opacity: 1;
  transform: translateY(0);
}

@keyframes glitch-idle {
  0%, 90%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
  92%            { transform: translate(-1px, 1px) rotate(10deg); opacity: 0.8; }
  94%            { transform: translate(1px, -1px) rotate(-5deg); opacity: 0.5; }
  96%            { transform: translate(0, 0) rotate(15deg); opacity: 1; }
}

@keyframes glitch-hover {
  0%   { transform: translate(0, 0)    skewX(0deg);  color: #d946ef; }
  25%  { transform: translate(-2px, 1px) skewX(5deg);  color: #f0abfc; }
  50%  { transform: translate(2px, -1px) skewX(-3deg); color: #c084fc; }
  75%  { transform: translate(-1px, 2px) skewX(2deg);  color: #d946ef; }
  100% { transform: translate(0, 0)    skewX(0deg);  color: #d946ef; }
}
/* ── Mobile easter egg ───────────────────────── */
.mobile-easter-egg {
  display: block;
  position: relative;
  margin-top: 2rem;
  padding: 0.75rem 0;
  border-top: 1px solid var(--color-border);
  text-decoration: none;
  overflow: hidden;
}

.mobile-easter-egg::after { display: none; }

.mobile-egg-text {
  display: block;
  font-family: monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #d946ef;
  opacity: 0.5;
  position: relative;
  animation: mobile-glitch-base 4s steps(1) infinite;
}

.mobile-egg-text.glitch-1 {
  position: absolute;
  top: 0.75rem;
  left: 0;
  color: #f0abfc;
  opacity: 0;
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  animation: mobile-glitch-1 4s steps(1) infinite;
}

.mobile-egg-text.glitch-2 {
  position: absolute;
  top: 0.75rem;
  left: 0;
  color: #c084fc;
  opacity: 0;
  clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  animation: mobile-glitch-2 4s steps(1) infinite;
}

.mobile-easter-egg:hover .mobile-egg-text,
.mobile-easter-egg:active .mobile-egg-text {
  opacity: 1;
  animation: mobile-glitch-base 0.3s steps(1) infinite;
}

@keyframes mobile-glitch-base {
  0%, 80%, 100% { transform: translate(0, 0); opacity: 0.5; }
  82%            { transform: translate(-3px, 0); opacity: 0.9; color: #f0abfc; }
  84%            { transform: translate(3px, 0);  opacity: 0.6; color: #c084fc; }
  86%            { transform: translate(0, 0);    opacity: 1;   color: #d946ef; }
  88%            { transform: translate(-1px, 0); opacity: 0.7; }
  90%            { transform: translate(0, 0);    opacity: 0.5; }
}

@keyframes mobile-glitch-1 {
  0%, 80%, 100% { opacity: 0; transform: translate(0, 0); }
  82%            { opacity: 0.8; transform: translate(-4px, 0); }
  84%            { opacity: 0;   transform: translate(0, 0); }
  86%            { opacity: 0.6; transform: translate(3px, 0); }
  88%            { opacity: 0;   transform: translate(0, 0); }
}

@keyframes mobile-glitch-2 {
  0%, 80%, 100% { opacity: 0; transform: translate(0, 0); }
  83%            { opacity: 0; }
  85%            { opacity: 0.7; transform: translate(4px, 0); }
  87%            { opacity: 0;   transform: translate(-2px, 0); }
  89%            { opacity: 0.5; transform: translate(0, 0); }
  91%            { opacity: 0; }
}
</style>