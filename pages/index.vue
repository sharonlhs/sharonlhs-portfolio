<template>
  <div class="home relative w-full min-h-screen overflow-hidden bg-[#3B5BDB] text-white">

    <!-- 2026 -->
    <div 
      class="absolute top-2 right-2 text-sm font-semibold tracking-wider">
      2026
    </div>

    <!-- Fireworks -->
    <NuxtImg
      src="/images/2026/gif/fireworks.gif"
      class="absolute top-10 left-10 w-[180px]"
    />

    <!-- Yellow sparks -->
    <NuxtImg
      src="/images/2026/gif/yellow-sparks.gif"
      class="absolute bottom-20 left-32 w-[300px]"
    />

    <!-- Sparkle -->
    <NuxtImg
      src="/images/2026/gif/sparkle.gif"
      class="absolute right-40 top-40 w-[220px]"
    />

    <!-- Frog music -->
    <FrogPlayer />

    <!-- Cook -->
    <NuxtImg
      src="/images/2026/gif/cook.gif"
      class="absolute bottom-16 left-[900px] -translate-x-1/2 w-[260px]"
    />

    <!-- Bunny work -->
    <NuxtImg
      src="/images/2026/gif/bunny-work.gif"
      class="absolute top-20 right-72 w-[260px]"
    />

    <!-- Duck with cone -->
    <NuxtImg
      src="/images/2026/duck-with-cone.png"
      class="absolute left-16 bottom-52 w-[120px]"
    />

    <!-- Fried chicken -->
    <NuxtImg
      src="/images/2026/fried-chicken.jpg"
      class="absolute top-24 left-[100px] w-[260px] rotate-[-12deg] rounded-lg shadow-2xl"
    />

    <!-- Golf ball -->
    <NuxtImg
      src="/images/2026/golf.png"
      class="absolute top-[200px] right-5 w-[200px]"
    />

    <!-- Lily -->
    <NuxtImg
      src="/images/2026/lily.png"
      class="absolute bottom-[80px] right-20 w-[360px]"
    />

    <!-- Skimski -->
    <NuxtImg
      src="/images/2026/skimski.png"
      class="absolute top-10 left-1/2 -translate-x-1/2 w-[160px]"
    />

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 class="text-5xl md:text-6xl font-bold leading-tight max-w-4xl z-10 gradient-text">
        I build things that<br />
        shouldn't work — but do
      </h1>

      <div class="mt-[80px] flex gap-6 items-center">
        <!-- Go Unhinged (Image Background Button) -->
        <NuxtLink
          to="/unhinged"
          class="absolute bottom-2 md:bottom-10 right-0 md:left-[20%]
                w-[436px] h-[365px]
                bg-contain bg-center bg-no-repeat
                flex items-center justify-center
                hover:scale-105 transition-transform"
          style="background-image: url('/images/2026/unhinged-btn.png')"
        >
          <span class="absolute top-[80px] right-[80px] text-black font-bold text-[32px] w-[170px] text-center">
            Go unhinged
          </span>
        </NuxtLink>

        <NuxtLink
          to="/professional"
          class="ml-[150px] md:ml-[250px] px-6 py-3 btn-primary transition"
        >
          Professional Mode
        </NuxtLink>
      </div>

    </div>
    
    <div class="text-sm opacity-80 absolute bottom-1 left-1/2 -translate-x-1/2">
      Sharon Lim
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'creative'
})

</script>

<style lang='scss'>
.home {
  --ink:      var(--color-text);
  --ink-muted:var(--color-muted);
  --ink-faint:var(--color-border);
  --surface:  var(--color-background);
  --surface-2:var(--color-background-white);
  --accent:   var(--color-accent);
  --accent-dk:var(--color-accent);
  --border:   var(--color-border);
  --radius:   6px;

  font-family: 'DM Sans', sans-serif;
}

.gradient-text {
  /* Solid purple fallback for mobile over the image */
  color: #d946ef;

  background: linear-gradient(
    90deg,
    #6b21a8 0%,
    #c084fc 20%,
    #f0abfc 40%,
    #e879f9 50%,
    #f0abfc 60%,
    #c084fc 80%,
    #6b21a8 100%
  );
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 10s linear infinite;
}

/* Mobile: drop gradient, use solid colour for legibility over image */
  @media (max-width: 767px) {
    .gradient-text {
      background: none;
      -webkit-text-fill-color: white;
      text-shadow: 4px 2px 0px #d946ef
    }
}

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
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
.btn-primary:hover { transform: translateY(-1px); }
.btn-primary.large { padding: 1rem 2.5rem; font-size: 1rem; }
</style>

