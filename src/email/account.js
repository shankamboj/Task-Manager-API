const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'shan.deep.kamboj@gmail.com',
    from :'shan.deep.kamboj@gmail.com',
    subject :'Task app',
    text :'This is Task App mail sent by shan'
})