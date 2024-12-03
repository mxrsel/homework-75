import express from "express";
import {vigenereCipher} from "../Vigenere/Vigenere";
import {Message} from "../types";

export const encodedMessageRouter = express.Router();

encodedMessageRouter.post("/encode", (req, res) => {
   try {
      const message: Message = { message: req.body.message };
      const password = 'password';

      const encodedMessage = vigenereCipher(message.message, password, true);

      res.json({ encodedMessage });
   } catch (e) {
      console.error(e);
   }
});