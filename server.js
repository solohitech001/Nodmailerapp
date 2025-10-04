const nodemailer = require("nodemailer");

async function main() {
  // Configure SMTP transporter
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",   // Namecheap SMTP server
    port: 465,                       // 465 (SSL) or 587 (TLS)
    secure: true,                    // true for 465, false for 587
    auth: {
      user: "gifts@magikworldgifts.com", // replace with your Namecheap email
      pass: "solohitech09#"           // replace with your email password
    }
  });

  try {
    // Send mail
    let info = await transporter.sendMail({
      from: '"My Test" <gifts@magikworldgifts.com>',  // sender address
      to: "solohitechnology01@gmail.com",          // test recipient
      subject: "Test Email from Nodemailer",       // subject
      text: "Hello Solomon, this is a test email sent using Namecheap + Nodemailer + Render!" // plain text body
    });

    console.log("✅ Email sent successfully:", info.messageId);
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
}

main();
