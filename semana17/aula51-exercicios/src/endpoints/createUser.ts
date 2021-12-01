import { Request, Response } from "express";
import { connection } from "../data/connection";
import { mailTransporter } from "../services/mailTransporter";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, address } = req.body

      if (!name || !nickname || !email || !address) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, address }

      await connection('aula51_users').insert(newUser)

      mailTransporter.sendMail({
         from: "<yuzo.dev.practice@gmail.com>",
         to: email,
         subject: "Redefinição de senha",
         text: "Redefinição de senha",
         html: `<p>BEM VINDA(O)!!! ${nickname}</p>`
     }).then(console.log)

      res.status(201).send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}