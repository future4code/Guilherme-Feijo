import dotenv from 'dotenv'
import app from "./app"
import createUser from './endpoints/createUser'
import passRecovery from './endpoints/passRecovery'
import { getAddressInfo } from './services/getAddressInfo'
import { mailTransporter } from './services/mailTransporter'

dotenv.config()

app.post('/users/signup', createUser)
app.patch('/users/recovery', passRecovery)

// getAddressInfo("05424150").then(console.log)

// mailTransporter.sendMail({
//     from: "<yuzo.dev.practice@gmail.com>",
//     to: "yuzo.dev.practice@gmail.com",
//     subject: "Mensagem de exemplo",
//     text: "Recuperação de senha",
//     html: `<p>Se não foi vc quem pediu a recuperação, ignore esse email.</p>`
// }).then(console.log)