<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto mb-12">
          <h1 class="text-4xl font-bold mb-4">Projects</h1>
          <p class="text-lg text-muted">A collection of my work across various domains and technologies.</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              v-for="project in projects"
              :key="project?.title"
              :image='project?.image'
              :title="project?.title"
              :description="project?.description"
              :technologies="project?.technologies"
              :link="project?.link"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang='ts'>
const { data: projects } = await useFetch('/api/projects')
</script>