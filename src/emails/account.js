const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rinibhatt9@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know if you like it or not`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rinibhatt9@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}. Hope to see you back soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}