<template>
  <div class="unhinged-page">
    <!-- Noise overlay -->
    <div class="noise" />

    <!-- Floating blobs -->
    <div class="blob blob-1" />
    <div class="blob blob-2" />
    <div class="blob blob-3" />

    <!-- Scattered decorative chars -->
    <span class="deco deco-1">✦</span>
    <span class="deco deco-2">*</span>
    <span class="deco deco-3">✺</span>
    <span class="deco deco-4">⊹</span>
    <span class="deco deco-5">✦</span>

    <main class="content">
      <div class="eyebrow">you found it.</div>

      <h1 class="headline">
        <span class="line-1">the unhinged</span>
        <span class="line-2">corner</span>
      </h1>

      <p class="subtext">
        this is where i put the stuff that made sense <em>at 2am</em>.<br />
        projects that shouldn't exist. ideas too weird for a résumé.<br />
        <strong>nothing's here yet.</strong> but it will be. eventually.
      </p>

      <div class="status-pill">
        <span class="dot" />
        under construction (genuinely)
      </div>

      <NuxtLink to="/professional" class="escape-link">
        ← get me out of here &nbsp;·&nbsp; Professional Mode
      </NuxtLink>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'unhinged'
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@400;700;800&display=swap');

.unhinged-page {
  min-height: 100vh;
  background: #0a0a0f;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  font-family: 'Syne', sans-serif;
}

/* Grain */
.noise {
  position: fixed;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.035;
  pointer-events: none;
  z-index: 1;
  animation: grain 0.8s steps(1) infinite;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2%, -3%); }
  20% { transform: translate(3%, 1%); }
  30% { transform: translate(-1%, 4%); }
  40% { transform: translate(4%, -2%); }
  50% { transform: translate(-3%, 2%); }
  60% { transform: translate(2%, -4%); }
  70% { transform: translate(-4%, 1%); }
  80% { transform: translate(1%, 3%); }
  90% { transform: translate(3%, -1%); }
}

/* Blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: #d946ef;
  top: -150px;
  left: -100px;
  animation: drift1 12s ease-in-out infinite alternate;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: #7c3aed;
  bottom: -80px;
  right: -60px;
  animation: drift2 15s ease-in-out infinite alternate;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: #f0abfc;
  top: 40%;
  left: 55%;
  animation: drift1 10s ease-in-out infinite alternate-reverse;
}

@keyframes drift1 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.08); }
}

@keyframes drift2 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-30px, -40px) scale(1.12); }
}

/* Decorative chars */
.deco {
  position: absolute;
  color: #d946ef;
  pointer-events: none;
  z-index: 2;
  opacity: 0.4;
  animation: float 6s ease-in-out infinite;
}

.deco-1 { font-size: 24px; top: 12%; left: 8%;  animation-delay: 0s; }
.deco-2 { font-size: 36px; top: 20%; right: 12%; animation-delay: 1.2s; }
.deco-3 { font-size: 18px; bottom: 25%; left: 15%; animation-delay: 2.4s; }
.deco-4 { font-size: 28px; bottom: 15%; right: 20%; animation-delay: 0.8s; }
.deco-5 { font-size: 16px; top: 55%; left: 5%;  animation-delay: 3s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
  50%       { transform: translateY(-12px) rotate(15deg); opacity: 0.7; }
}

/* Content */
.content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  max-width: 700px;
  animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

.eyebrow {
  font-family: 'Syne', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #d946ef;
  margin-bottom: 1.5rem;
  animation: fadeUp 0.9s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.headline {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  line-height: 0.95;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.line-1 {
  font-size: clamp(4rem, 12vw, 8rem);
  color: #ffffff;
  animation: fadeUp 0.9s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.line-2 {
  font-size: clamp(4rem, 12vw, 8rem);
  background: linear-gradient(90deg, #6b21a8 0%, #c084fc 30%, #f0abfc 50%, #e879f9 65%, #c084fc 80%, #6b21a8 100%);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeUp 0.9s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both,
             shimmer 8s linear infinite;
}

@keyframes shimmer {
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
}

.subtext {
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #9ca3af;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  animation: fadeUp 0.9s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.subtext em  { color: #f0abfc; font-style: normal; }
.subtext strong { color: #ffffff; }

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(217, 70, 239, 0.08);
  border: 1px solid rgba(217, 70, 239, 0.25);
  color: #d946ef;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  margin-bottom: 3rem;
  animation: fadeUp 0.9s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #d946ef;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
}

.escape-link {
  display: inline-block;
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  text-decoration: none;
  letter-spacing: 0.05em;
  border-bottom: 1px solid transparent;
  transition: color 0.3s, border-color 0.3s;
  animation: fadeUp 0.9s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  margin-left: 8px;
}

.escape-link:hover {
  color: #d946ef;
  border-bottom-color: #d946ef;
}
</style>