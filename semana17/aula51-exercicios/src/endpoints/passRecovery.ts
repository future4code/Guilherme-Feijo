import { Request, Response } from "express";
import { connection } from "../data/connection";
import { mailTransporter } from "../services/mailTransporter";
import { user } from "../types";

export default async function passRecovery(
   req: Request,
   res: Response
): Promise<void> {
   try {

    const { email } = req.body

    // verifica se existe no banco de dados
    const [ user ] = await connection("aula51_users").select().where({ email })
    if (!user) {
        throw new Error("Usuário não cadastrado")
    }

    const newPassword = Date.now().toString()

    // troca a senha manualmente
    await connection("aula51_users").update({ address: newPassword }).where({ email })

    // manda email com a senha nova
    mailTransporter.sendMail({
        from: "<yuzo.dev.practice@gmail.com>",
        to: email,
        subject: "Redefinição de senha",
        text: "Redefinição de senha",
        html: `<p>nova senha = ${newPassword}</p>`
    }).then(console.log)

    res.status(200).send("senha resetada com sucesso")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}