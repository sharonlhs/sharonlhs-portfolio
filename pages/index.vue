<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Creating thoughtful <span class="text-accent">digital experiences</span> through design & code 
          </h1>
          <p class="text-xl text-muted mb-8 max-w-lg mx-auto">
            I'm Sharon Lim, a designer and developer focused on creating beautiful, functional, and accessible digital products.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/projects" class="button">
              View My Work
            </NuxtLink>
            <NuxtLink to="/contact" class="px-6 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors">
              Get in Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-16 bg-background-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto mb-12 text-center">
          <h2 class="text-3xl font-bold mb-4">Selected Projects</h2>
          <p class="text-muted">A showcase of my recent work and explorations.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProjectCard 
            v-for="project in featuredProjects"
            :key="project?.title"
            :image='project?.image'
            :title="project?.title"
            :description="project?.description"
            :technologies="project?.technologies"
            :link="project?.link"
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/projects" class="text-accent">
            View All Projects
            <span class="ml-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Teaser Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-6">About Me</h2>
          <p class="text-lg mb-6">
            Hello! I'm Sharon, a frontend developer passionate about creating thoughtful digital experiences. 
            I focus on writing clean, maintainable code and designing intuitive interfaces.
          </p>
          <p class="text-lg mb-8">
            Currently working with modern JavaScript frameworks and exploring new ways to create delightful user experiences.
          </p>
          <NuxtLink to="/about" class="text-accent">
            Learn More About Me
            <span class="ml-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: featuredProjects } = await useFetch('/api/projects', {
  query: { featured: 'true' }
})
</script>