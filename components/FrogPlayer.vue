<template>
  <div class="frog-wrap">
    <!-- Tooltip -->
    <Transition name="pop">
      <div v-if="isOpen && song" class="music-tooltip">
        <div class="tooltip-header">
          <span class="now-playing">{{ isPlaying ? "NOW PLAYING" : "STOPPED" }}</span>
          <button class="close-btn" @click="isOpen = false">✕</button>
        </div>

        <div class="track-info">
          <img :src="song.cover" :alt="song.title" class="track-cover" />
          <div class="track-meta">
            <p class="track-title">{{ song.title }}</p>
            <p class="track-artist">{{ song.artist }}</p>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="progress-wrap">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPct + '%' }" />
          </div>
          <div class="progress-times">
            <span>{{ formatTime(elapsed) }}</span>
            <span>{{ song.duration }}</span>
          </div>
        </div>

        <!-- Controls -->
        <div class="controls">
          <button v-if="isPlaying" class="ctrl-btn stop" @click="stopSong" title="Stop">
            ⏹
          </button>
          <button v-else class="ctrl-btn play" @click="playSong" title="Play">
            ▶
          </button>
        </div>

        <a :href="song.url" target="_blank" rel="noopener noreferrer" class="open-link">
          Watch on YouTube ↗
        </a>

        <div class="tooltip-arrow" />
      </div>
    </Transition>

    <!-- Persistent iframe — keeps playing when tooltip is closed -->
    <iframe
      v-if="isPlaying && song"
      :src="`https://www.youtube.com/embed/${song.videoId}?autoplay=1&enablejsapi=1`"
      class="yt-frame"
      allow="autoplay; encrypted-media"
      frameborder="0"
    />

    <!-- Frog -->
    <NuxtImg
      src="/images/2026/gif/frog-music.gif"
      class="frog"
      :class="{ bouncing: isPlaying }"
      @click="handleFrogClick"
      alt="frog music"
    />
  </div>
</template>

<script setup>
const { data: songsData } = await useFetch('/api/get-song')

const isOpen = ref(false)
const isPlaying = ref(false)
const elapsed = ref(0)
let timer = null

const song = computed(() => songsData.value?.[0] ?? null)

// Parse "m:ss" duration string into total seconds
function parseDuration(str) {
  if (!str) return 0
  const [m, s] = str.split(':').map(Number)
  return m * 60 + s
}

function formatTime(secs) {
  const m = Math.floor(secs / 60)
  const s = String(Math.floor(secs % 60)).padStart(2, '0')
  return `${m}:${s}`
}

const totalSeconds = computed(() => parseDuration(song.value?.duration))
const progressPct = computed(() =>
  totalSeconds.value > 0 ? (elapsed.value / totalSeconds.value) * 100 : 0
)

function startTimer() {
  timer = setInterval(() => {
    if (elapsed.value < totalSeconds.value) {
      elapsed.value++
    } else {
      clearInterval(timer)
      isPlaying.value = false
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(timer)
  timer = null
}

// Frog click: start playing + open tooltip if not playing, else just toggle tooltip
function handleFrogClick() {
  if (!song.value) return
  if (!isPlaying.value) {
    isPlaying.value = true
    startTimer()
  }
  isOpen.value = !isOpen.value
}

function playSong() {
  elapsed.value = 0
  isPlaying.value = true
  startTimer()
}

function stopSong() {
  isPlaying.value = false
  stopTimer()
  elapsed.value = 0
}

function close() {
  // only close tooltip, keep playing
  isOpen.value = false
}

onUnmounted(() => stopTimer())
</script>

<style scoped>
.frog-wrap {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 20;
}

.frog {
  width: 120px;
  display: block;
  cursor: pointer;
  transition: transform 0.2s ease;
  transform-origin: bottom center;
}

.frog:hover { transform: scale(1.08); }

.frog.bouncing {
  animation: bounce 0.6s ease infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to   { transform: translateY(-6px); }
}

/* Tooltip */
.music-tooltip {
  position: absolute;
  bottom: 110px;
  right: 20px;
  width: 240px;
  background: var(--color-background-white);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 30;
}

.tooltip-arrow {
  position: absolute;
  bottom: -7px;
  right: 28px;
  width: 13px;
  height: 13px;
  background: var(--color-background-white);
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  transform: rotate(45deg);
}

.tooltip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.now-playing {
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: var(--color-muted);
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}
.close-btn:hover { color: var(--color-text); }

.track-info {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1rem;
}

.track-cover {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid var(--color-border);
}

.track-title {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.3;
  margin-bottom: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

.track-artist {
  font-size: 0.75rem;
  color: var(--color-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

/* Progress */
.progress-wrap {
  margin-bottom: 0.75rem;
}

.progress-bar {
  height: 3px;
  background: var(--color-border);
  border-radius: 999px;
  margin-bottom: 0.35rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: 999px;
  transition: width 1s linear;
}

.progress-times {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: var(--color-muted);
}

/* Hidden YouTube iframe — still plays audio */
.yt-frame {
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
}

/* Controls */
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.ctrl-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--color-muted);
  padding: 0;
  transition: color 0.2s, transform 0.15s;
  line-height: 1;
}
.ctrl-btn:hover { color: var(--color-text); transform: scale(1.15); }

.ctrl-btn.play {
  width: 36px;
  height: 36px;
  background: var(--color-accent);
  color: #fff;
  border-radius: 50%;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ctrl-btn.play:hover { opacity: 0.85; transform: scale(1.08); color: #fff; }

.ctrl-btn.stop {
  width: 36px;
  height: 36px;
  background: #ef4444;
  color: #fff;
  border-radius: 50%;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ctrl-btn.stop:hover { opacity: 0.85; transform: scale(1.08); color: #fff; }

.open-link {
  display: block;
  text-align: center;
  font-size: 0.7rem;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.open-link::after { display: none; }
.open-link:hover { color: var(--color-accent); }

/* Transition */
.pop-enter-active { animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
.pop-leave-active { animation: popIn 0.15s cubic-bezier(0.16, 1, 0.3, 1) reverse; }

@keyframes popIn {
  from { opacity: 0; transform: scale(0.85) translateY(8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
</style>