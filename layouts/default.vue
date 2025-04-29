<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import * as amplitude from '@amplitude/analytics-browser';
import { autocapturePlugin } from '@amplitude/plugin-autocapture-browser';

amplitude.init(`${process.env.AMPLITUDE_KEY}`, {
  autocapture: {
    elementInteractions: true
  }
});
</script>