import nodemailer from "nodemailer";

export async function enviarEmailRecuperacao(email: string, token: string) {
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    to: email,
    subject: 'Recuperação de Senha - SWCS',
    html: `
      <p>Clique no link para redefinir sua senha:</p>
      <a href="${process.env.FRONTEND_URL}/reset-password?token=${token}">
        Redefinir Senha
      </a>
    `
  });
}