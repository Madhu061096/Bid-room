const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'madhugchoudhari@gmail.com',
      pass: 'Rajat@31'
    }
  });

  const options ={
      from:"madhugchoudhari@gmail.com",
      to:"sumitanilkumarsingh0@gmail.com",
      subject: "Sending email with node.js!",
      text:"wow! That's simple!"
  }

  transporter.sendMail(options,function(err,info){
      if(err){
          console.log(err);
          return;
      }
      console.log("Sent :" + info.response);
  })