<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
  <FrogPlayer :index='0' class="frog-fixed" />
</template>
<script setup lang='ts'>
import { useHead, useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()

useHead({
  script: [
    {
      src: `https://cdn.amplitude.com/script/${config.public.AMPLITUDE_KEY}.js`,
      defer: true,
    },
    {
      children: `
        window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
        window.amplitude.init('${config.public.AMPLITUDE_KEY}', {
          fetchRemoteConfig: true,
          autocapture: true
        });
      `,
      type: 'text/javascript'
    }
  ]
})
</script>

<style scoped>
.frog-fixed {
  position: fixed;
  bottom: 0;
  right: 1.5rem;
  z-index: 100;
}
</style>