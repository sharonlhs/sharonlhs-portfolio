<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">

        <!-- Header -->
        <div class="projects-header">
          <span class="section-tag">Work</span>
          <h1 class="projects-title">Projects</h1>
          <p class="projects-sub">A collection of my work across various domains and technologies.</p>
        </div>

        <!-- Grid -->
        <div class="projects-grid">
          <ProjectCard
            v-for="project in projects"
            :key="project?.title"
            :image="project?.image"
            :title="project?.title"
            :description="project?.description"
            :technologies="project?.technologies"
            :link="project?.link"
          />
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useFetch('/api/projects')
</script>

<style scoped>
.projects-header {
  max-width: 600px;
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

.projects-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.projects-sub {
  font-size: 1rem;
  color: var(--color-muted);
  font-weight: 300;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
  gap: 2rem;
}
</style>