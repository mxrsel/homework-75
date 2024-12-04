import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import theme from "./theme.ts";
import {store} from "./app/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
            <ThemeProvider theme={theme}>
                 <App />
            </ThemeProvider>
    </Provider>
)
