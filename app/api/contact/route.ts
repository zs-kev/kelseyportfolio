const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);
const toEmail = process.env.SEND_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  const body = await request.json();

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: toEmail,
    from: fromEmail,
    subject: 'new form submission from Kelsey Illustrates',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  let result: string = '';

  try {
    await mail.send(data);
    result = 'success';
  } catch (error) {
    result = 'error';
  }

  return new Response(result);
}
