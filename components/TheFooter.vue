<template>
  <footer class="py-8 border-t border-border mt-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-muted mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} Sharon Lim. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a 
            v-for="link in socialLinks" 
            :key="link.name" 
            :href="link.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-muted hover:text-accent transition-colors"
            :aria-label="link.name"
          >
            <Icon :name="link.icon" size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data: socialLinks } = await useFetch('/api/social-links')
</script>