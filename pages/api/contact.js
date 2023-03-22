export default function sendMail(req, res) {
  let nodemailer = require('nodemailer');

  console.log(process.env.password);
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.email,
      pass: process.env.password
    },
    secure: true
  });

  const mailData = {
    from: 'nyoyokoavictor@gmail.com',
    to: 'vfranktor@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from : 
      ${req.body.email}</p>`
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.status(200);
}
