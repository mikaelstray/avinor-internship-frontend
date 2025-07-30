import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {store} from "./app/store.ts";
import {Provider} from "react-redux";
import { RouterProvider} from "@tanstack/react-router";
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import '@digdir/designsystemet-css/index.css';
import './style/avinor.css'
import './style/fonts.css';
import { router } from './app/router'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
        </Provider>
    </StrictMode>,
)
