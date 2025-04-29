<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold mb-8">Now</h1>
          
          <div class="prose max-w-none">
            <p class="text-lg italic text-muted mb-8">
              Last updated: {{ formatDate(lastUpdated) }}
            </p>
            
            <p class="text-lg mb-6">
              Here's what I'm focused on right now.
            </p>
            
            <h2 class="text-2xl font-bold mt-12 mb-6">Current Work</h2>
            <p class="mb-6">
              I'm currently working as a Frontend Developer at Agmo Artisan, a vendor company where I lead frontend development across various client projects in education, NGOs, and media sectors. I focus on building accessible, high-performing web applications tailored to each client’s needs.
            </p>
            
            <h2 class="text-2xl font-bold mt-12 mb-6">Learning</h2>
            <p class="mb-6">
              I'm exploring AI agents and automation tools to build smarter workflows and enhance productivity. Currently experimenting with tools like make.com and n8n to better understand how to integrate AI into modern web applications.
            </p>
            
            <h2 class="text-2xl font-bold mt-12 mb-6">Personal Projects</h2>
            <p class="mb-6">
              I'm building a personal productivity app to help manage my daily tasks and long-term goals. It's a side project that lets me experiment with new technologies and design patterns.
            </p>

            <h2 class="text-2xl font-bold mt-12 mb-6">Life</h2>
            <p class="mb-6">
              Outside of work, I’ve been experimenting with new recipes and enjoying the process of cooking as a creative outlet. It’s a fun way to unwind and try something new every week.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const lastUpdated = new Date(2025, 3, 29); // April 29, 2025

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
</script>