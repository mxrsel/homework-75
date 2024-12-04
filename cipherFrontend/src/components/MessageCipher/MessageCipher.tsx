import {Button, Input, Typography} from "@mui/material";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

const MessageCipher = () => {
    return (
        <div>
            <h1>Message Cipher</h1>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    <Typography>Message
                <Input
                    placeholder="Enter message"
                />
                    </Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Password
                <Input
                    type="password"
                    placeholder="Enter password"
                    required
                />
                <Button> <ArrowDownward/> </Button>
                <Button> <ArrowUpward/> </Button>
                </Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Result
                <Input
                    placeholder="Result"
                    readOnly
                />
                </Typography>
            </div>
        </div>
    );
};

export default MessageCipher;
