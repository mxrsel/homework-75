import {Button, Input, Typography} from "@mui/material";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {decodedMessage, encodedMessage} from "../../store/thunks/cipherThunks.ts";

const MessageCipher = () => {
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const encodedMessageResult = useAppSelector((state) => state.cipher.encodedMessage);
    const decodedMessageResult = useAppSelector((state) => state.cipher.decodedMessage);

    const fixedPassword = 'password';

    const handleEncode = () => {
        if (password !== fixedPassword) {
            alert('Wrong Password')
        }
        dispatch(encodedMessage(message));
    };

    const handleDecode = () => {
        if (password !== fixedPassword) {
            alert('Wrong Password')
        }
        dispatch(decodedMessage(message));
    };

    return (
        <div>
            <h1>Message Cipher</h1>

                    <Typography>Message
                <Input
                    name='message'
                    required
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                    </Typography>

                <Typography>Password
                <Input
                    type="password"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleEncode}> <ArrowDownward/> </Button>
                <Button onClick={handleDecode}> <ArrowUpward/> </Button>
                </Typography>


                <Typography>Result
                <Input
                    placeholder="Result"
                    value={encodedMessageResult || decodedMessageResult || ''}
                    readOnly
                />
                </Typography>
            </div>
    );
};

export default MessageCipher;
