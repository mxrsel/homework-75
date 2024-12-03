import express from "express";
import cors from 'cors';
import { encodedMessageRouter } from "./encodedMessage/encodedMessage";
import { decodedMessageRouter } from "./decodedMessage/decodedMessage";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/cipher', encodedMessageRouter);
app.use('/cipher', decodedMessageRouter);

app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
});
