import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API)

export async function POST(req: Request) {
  const { name, number, email, message } = await req.json()

  const messageBody = `
    <div style="background-color: #f9f9f9; padding: 20px;">
      <p>Meddelande från: ${name}</p>
      <h3>Email: ${email}</h3>
      <h3>Telefon: ${number}</h3>
      <p>Meddelande: ${message}</p>
    </div>
  `
  try {
    const { data, error } = await resend.emails.send({
      from: 'Notifikation: Kontakt <onboarding@resend.dev>',
      to: ['andrea@bastakompisar.se'],
      subject: 'Meddelande',
      html: messageBody,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}