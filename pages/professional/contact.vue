<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-4xl font-bold mb-6">Contact</h1>

          <p class="text-lg mb-10 text-muted">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            using any of the methods below.
          </p>

          <!-- Social Links -->
          <div class="mb-16">
            <h2 class="text-2xl font-medium mb-4">Social</h2>
            <div class="flex items-center space-x-5">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-accent hover:text-accent/80 transition-transform transform hover:scale-110"
                :title="link.name"
              >
                <Icon :name="link.icon" size="28" />
              </a>
            </div>
          </div>

          <!-- Email Card -->
          <div class="bg-background-white p-8 rounded-xl shadow border border-border">
            <div class="flex items-start gap-4 mb-6">
              <div class="icon-wrap">
                <Icon name="ri:mail-line" size="22" />
              </div>
              <div>
                <h2 class="text-2xl font-medium mb-1">Send a Message</h2>
                <p class="text-muted text-sm leading-relaxed">
                  Drop me an email and I'll get back to you within a day or two.
                </p>
              </div>
            </div>

            <!-- What to include nudge -->
            <div class="nudge-box mb-8">
              <p class="text-sm font-medium mb-2">Feel free to include:</p>
              <ul class="text-sm text-muted space-y-1">
                <li>✦ &nbsp;What you're working on</li>
                <li>✦ &nbsp;What kind of help you're looking for</li>
                <li>✦ &nbsp;Any relevant links or context</li>
              </ul>
            </div>

            <a
              :href="`mailto:${EMAIL}?subject=Hey Sharon — Let's work together`"
              class="mail-button"
            >
              <Icon name="ri:mail-send-line" size="18" />
              Open in Mail
            </a>

            <p class="text-xs text-muted mt-4 text-center">
              Opens your default mail app with my address pre-filled.
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const EMAIL = config.public.MY_EMAIL

const { data: socialLinks } = await useFetch('/api/social-links')
</script>

<style scoped>
.icon-wrap {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}

.nudge-box {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem 1.25rem;
}

.nudge-box p {
  color: var(--color-text);
}

.mail-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.8rem 1.5rem;
  background: var(--color-accent);
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}

.mail-button::after { display: none; }

.mail-button:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  color: #fff;
}
</style>