import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: 'form',
    handler: async (formData) => {
      const name = String(formData.get('name') ?? '').trim();
      const email = String(formData.get('email') ?? '').trim();
      const topic = String(formData.get('topic') ?? '').trim();
      const message = String(formData.get('message') ?? '').trim();

      if (!name || !email || !topic || !message) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Please fill in all required fields.',
        });
      }

      const escapeHtml = (value: string) =>
        value
          .replaceAll('&', '&amp;')
          .replaceAll('<', '&lt;')
          .replaceAll('>', '&gt;')
          .replaceAll('"', '&quot;')
          .replaceAll("'", '&#39;');

      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['lauwersjon@gmail.com'],
        replyTo: email,
        subject: `Contact form: ${topic}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};
