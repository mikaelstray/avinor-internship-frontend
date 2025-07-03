import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import {store} from "./app/store.ts";
import {Provider} from "react-redux";
import {createRouter, RouterProvider} from "@tanstack/react-router";

const router = createRouter({ routeTree })


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
)
