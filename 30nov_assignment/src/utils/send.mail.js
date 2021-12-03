const transporter = require("../configs/mail");

module.exports=(from, to , subject, text, html)=>{

    const message = {
        from,
        to,
        subject,
        text,
        html,
    };

    transporter.sendMail(message);
}




// const admins = ["admin1@gmail.com", "admin2@gmail.com", "admin3@gmail.com", "admin4@gmail.com","admin5@gmail.com"];
// const to_string = admins.join(",");
        
// const message = {
//     from: "sevice@gmail.com",
//     to: `${req.body.email}`,
//     subject: `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
//     text: ` Hi ${req.body.first_name}, Please confirm your email address`,
//     html: "<h1>message is sent</h1>"
// };

// const message2 = {
//     from: "sevice@gmail.com",
//     to: to_string,
//     subject: `${req.body.first_name} ${req.body.last_name} has registerd with us`,
//     text: `Please welcome${req.body.first_name} ${req.body.last_name}`,
//     html: "<h1>message is sent</h1>"
// };

// transporter.sendMail(message);
// transporter.sendMail(message2);