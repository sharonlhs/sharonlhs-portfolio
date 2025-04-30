import { Resend } from 'resend'

const resend = new Resend(process.env.NUXT_RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event)

  const { name, email, message } = body

  try {
    await resend.emails.send({
      from: 'Sharon <onboarding@resend.dev>',
      to: ["delivered@resend.dev"],
      subject: `Submission Form from ${name}!`,
      html: `
        <p>Name: ${name},</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    })

    await $fetch(`${config.public.CONTACT_US_ENDPOINT}`, {
      method: 'POST',
      body: {
        name: body.name,
        from_email: body.email,
        message: body.message,
        to_email: config.public.MY_EMAIL,
      },
    });
    
    return { success: true }
  } catch (error) {
    console.error('Resend error:', error)
    return { success: false, error }
  }
})