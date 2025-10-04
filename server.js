const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000; // Render will assign a port

app.get("/", async (req, res) => {
  // Configure SMTP transporter
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",   // Namecheap SMTP server
    port: 465,                       // 465 (SSL) or 587 (TLS)
    secure: true,                    // true for 465, false for 587
    auth: {
      user: "gifts@magikworldgifts.com", // replace with your Namecheap email
      pass: "solohitech09#"             // replace with your email password
    }
  });

  try {
    // Send mail
    let info = await transporter.sendMail({
      from: '"My Test" <gifts@magikworldgifts.com>',
      to: "solohitechnology01@gmail.com",
      subject: "Test Email from Nodemailer",
      text: "Hello Solomon, this is a test email sent using Namecheap + Nodemailer + Render!"
    });

    console.log("✅ Email sent successfully:", info.messageId);
    res.send("✅ Email sent successfully!");
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).send("❌ Error sending email: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
