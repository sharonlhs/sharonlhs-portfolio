<template>
<div class="min-h-screen bg-[#3B5BDB] md:h-screen md:overflow-hidden">
    <main class="flex-grow h-full">
      <NuxtPage />
    </main>
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