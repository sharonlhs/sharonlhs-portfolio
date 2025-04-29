<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto">
          <h1 class="text-4xl font-bold mb-8">About Me</h1>
          <div class="md:flex md:items-start md:gap-8 mb-8">
            <div class='w-full flex flex-col items-center justify-center gap-8'>
              <img 
                src="/images/about/me.jpeg" 
                alt="Sharon's portrait" 
                class="w-48 h-60 object-cover rounded-md w-full"
              />
              <div class="border-t border-border">
              <NuxtLink to="/contact" class="button">
                Get in Touch
              </NuxtLink>
            </div>
          </div>
            <div class="prose max-w-none">
              <p class="text-lg mb-6">
                  Hello! I'm Sharon, a designer and developer with a passion for creating beautiful, functional, and accessible digital experiences. After studying design and software engineering, I've spent the last two years helping companies of all sizes establish their digital presence.
              </p>
              
              <p class="text-lg mb-6">
            I believe in minimalism not just as an aesthetic choice, but as a core philosophy in how digital products should work. My goal is always to create experiences that are intuitive, accessible, and joyful to use.
              </p>
  
              <p class="text-lg mb-6">
          Shortly after, I joined a startup where I honed my skills in modern web development. Since then, I've had the privilege of working with diverse teams and clients on a variety of interesting projects.
              </p>
              
              <h2 class="text-2xl font-bold mt-12 mb-6">My Skills</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                <div>
                  <h3 class="text-xl font-medium mb-3">Frontend</h3>
                  <ul class="space-y-2">
                    <li>HTML, CSS, JavaScript (ES6+)</li>
                    <li>Vue.js, React, Nuxt.js</li>
                    <li>Tailwind CSS, SCSS</li>
                    <li>Responsive design</li>
                  </ul>
                </div>
                
                <div>
                  <h3 class="text-xl font-medium mb-3">Backend</h3>
                  <ul class="space-y-2">
                    <li>Node.js, NextJs</li>
                    <li>PostgreSQL</li>
                    <li>RESTful APIs</li>
                    <li>Authentication flows</li>
                  </ul>
                </div>
              </div>
              
              <h2 class="text-2xl font-bold mt-12 mb-6">My Journey</h2>
              
              <div class="space-y-8">
                <div>
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-medium">Web Developer</h3>
                    <span class="text-muted">May 2023 - Present (2 years)</span>
                  </div>
                  <a href="https://artisan.com.my/" target="_blank" class="text-accent mb-2">Agmo Artisan Sdn Bhd</a>
                  <p>Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices for accessibility and performance.</p>
                </div>
                
                <div>
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-medium">Product Management Intern</h3>
                    <span class="text-muted">Feb 2023 - Apr 2023 (3 months)</span>
                  </div>
                  <a href="https://www.pitchin.my" target="_blank" class="text-accent mb-2">Pitch Platforms Sdn Bhd</a>
                  Contributed to product strategy by writing PRDs, conducting customer research, aligning cross-functional teams, and leading content planning and development for the <a href="https://www.pitchin.my/learn" target="_blank" class='text-accent'>Learning Portal</a>.
                  <!-- <p>Developed responsive websites and web applications for various clients in retail, healthcare, and finance sectors.</p> -->
                </div>
              </div>
              
              <h2 class="text-2xl font-bold mt-12 mb-6">When I'm Not Coding</h2>
              <p class="text-lg mb-6">
                You'll find me crocheting cozy creations, playing the piano, or exploring new cafes and foods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// About page component
</script>