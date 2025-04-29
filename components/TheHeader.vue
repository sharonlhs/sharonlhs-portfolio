<template>
  <header class="py-6 border-b border-border">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold no-underline">
        SL
      </NuxtLink>
      <div class="flex items-center gap-6">
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink :to="item.path" class="text-text hover:text-accent transition-colors">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden text-text focus:outline-none"
          aria-label="Toggle menu"
        >
          <span class="block w-6 h-0.5 bg-text mb-1.5"></span>
          <span class="block w-6 h-0.5 bg-text mb-1.5"></span>
          <span class="block w-6 h-0.5 bg-text"></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-50"
    >
      <nav class="container mx-auto px-4 py-4">
        <ul class="space-y-4">
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink 
              :to="item.path" 
              class="block py-2 text-text hover:text-accent transition-colors"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Now', path: '/now' },
  { name: 'Contact', path: '/contact' }
];

// Close mobile menu when window is resized to desktop size
onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        isMenuOpen.value = false;
      }
    });
  }
});
</script>

<style scoped>
a::after {
  display: none;
}
</style>