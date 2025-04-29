export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  await event.context.mail.send({
    subject: `New message from ${body.name}`,
    text: `
      Name: ${body.name}
      Email: ${body.email}
      Message: ${body.message}
    `
  })

  return { success: true }
})