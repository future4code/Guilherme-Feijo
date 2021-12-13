import { Request, Response } from "express";
import {connection} from "../data/connection";
import { user } from "../types";
import { IdGenerated } from "../services/IdGenerator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      // Item c. Validação da senha
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const id: string = new IdGenerated().generatedId()
  
    
      await createUser(id, userData.email, userData.password);
  
      const token = generateToken({
        id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  
}