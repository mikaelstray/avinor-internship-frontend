import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import {store} from "./app/store.ts";
import {Provider} from "react-redux";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import '@digdir/designsystemet-css/index.css';
import './style/avinor.css'
import './style/fonts.css';


const router = createRouter({ routeTree })


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
        </Provider>
    </StrictMode>,
)
