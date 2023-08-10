const nodemailer = require('nodemailer');
const Email = require('../models/Email');
require('dotenv').config();

const emailController = {
  sendEmail: async (req, res) => {
    const { email, heading, body } = req.body;
    const emailData = new Email(email, heading, body);

    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: emailData.email,
        to: 'stotev0@gmail.com',
        subject: `${emailData.heading} from ${emailData.email}`,
        text: emailData.body,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({message: 'Email sent successfully'});
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  },
};

module.exports = emailController;
