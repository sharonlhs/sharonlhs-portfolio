<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-4xl font-bold mb-6">Contact</h1>
          
          <p class="text-lg mb-10 text-muted">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using any of the methods below.
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

          <!-- Contact Form -->
          <div class="bg-background-white p-8 rounded-xl shadow border border-border">
            <h2 class="text-2xl font-medium mb-6">Send a Message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-muted mb-1">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-white"
                  required
                />
              </div>

              <div>
                <label for="email" class="block text-muted mb-1">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-white"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-muted mb-1">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="button w-full flex justify-center items-center"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>

            <!-- Success message -->
            <p v-if="showSuccess" class="text-green-600 mt-6 text-center">
              Thank you! Your message has been sent.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const { data: socialLinks } = await useFetch('/api/social-links')
const mail = useMail()



async function handleSubmit() {
  isSubmitting.value = true;


  try {
    mail.send({
      from: form.value.name,
      to: process.env.SMTP_TO,
      cc: process.env.SMTP_TO,
      bcc: process.env.SMTP_TO,
      subject: 'Contact Us Form',
      text: `Name: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`,
    })

    showSuccess.value = true;
    form.value = {
      name: '',
      email: '',
      message: ''
    };
  } catch (error) {
    console.error('Email failed to send:', error);
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  }
}
</script>