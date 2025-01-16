import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const ServiceID = process.env.EMAILJS_SERVICE_ID;
    const TemplateID = process.env.EMAILJS_TEMPLATE_ID;
    const PublicKey = process.env.EMAILJS_PUBLIC_KEY;

    const response = await emailjs.send(
      ServiceID,
      TemplateID,
      {
        user_name,
        user_email,
        message,
      },
      PublicKey
    );

    res.status(200).json({ message: 'Email sent successfully!', response });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error });
  }
}
export default async function handler(req, res) {
    res.status(200).json({ message: 'API is working!' });
  }
  