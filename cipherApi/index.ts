import express from "express";
import {encodedMessageRouter} from "./encodedMessage/encodedMessage";
import {decodedMessageRouter} from "./decodedMessage/decodedMessage";

const app = express();
const port = 8000;

app.use('/encoded', encodedMessageRouter);
app.use('/decoded', decodedMessageRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})