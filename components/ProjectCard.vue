<template>
  <article class="project-card">
    <!-- Image -->
    <div class="card-image-wrap">
      <img
        :src="image"
        :alt="title"
        class="card-image"
      />
      <div class="card-image-overlay" />
    </div>

    <!-- Body -->
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>

      <!-- Tech tags -->
      <div class="card-tags">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="tag"
        >{{ tech }}</span>
      </div>

      <!-- Link -->
      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="card-link"
      >
        View Project
        <span class="arrow">→</span>
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title:        { type: String,  required: true },
  image:        { type: String,  required: true },
  description:  { type: String,  required: true },
  technologies: { type: Array,   default: () => [] },
  link:         { type: String,  required: true },
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--color-background-white);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border-color: var(--color-accent);
}

/* Image */
.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image {
  transform: scale(1.04);
}

.card-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.08) 100%);
  pointer-events: none;
}

/* Body */
.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  gap: 0.75rem;
}

.card-title {
  font-family: 'DM Serif Display', serif;
  font-size: 1.25rem;
  letter-spacing: -0.01em;
  color: var(--color-text);
  line-height: 1.3;
}

.card-desc {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--color-muted);
  font-weight: 300;
  flex: 1;
}

/* Tags */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.tag {
  padding: 0.25rem 0.65rem;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  color: var(--color-muted);
  font-weight: 400;
}

/* Link */
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--color-accent);
  text-decoration: none;
  margin-top: 0.5rem;
  transition: gap 0.2s ease, opacity 0.2s;
}

.card-link::after { display: none; }
.card-link:hover { opacity: 0.75; }
.card-link:hover .arrow { transform: translateX(4px); }

.arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}
</style>