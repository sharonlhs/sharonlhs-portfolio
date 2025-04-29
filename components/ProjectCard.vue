<template>
  <article class="border border-border p-6 rounded-lg transition-all duration-300 hover:shadow-md">
    <img 
      :src="image" 
      :alt="title" 
      class="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 class="text-xl font-medium mb-3">{{ title }}</h3>
    <p class="text-muted mb-4">{{ description }}</p>
    <div class="flex flex-wrap gap-2 mb-6">
      <span 
        v-for="tech in technologies" 
        :key="tech"
        class="inline-block px-2 py-1 bg-border text-muted text-sm rounded"
      >
        {{ tech }}
      </span>
    </div>
    <a :href="link" target="_blank" rel="noopener noreferrer" class="text-accent">
      View Project
      <span class="ml-1">→</span>
    </a>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    default: () => []
  },
  link: {
    type: String,
    required: true
  }
});
</script>