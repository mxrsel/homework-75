import express from "express";
import {vigenereCipher} from "../Vigenere/Vigenere";
import {Message} from "../types";

export const decodedMessageRouter = express.Router();

decodedMessageRouter.post("/decode", (req, res) => {
    try {
        const message: Message = { message: req.body.message };
        const password = 'password';

        const decodedMessage = vigenereCipher(message.message, password, false);

        res.json({ decodedMessage });
    } catch (e) {
        console.error(e);
    }
});