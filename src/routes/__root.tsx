import {createRootRoute, Link, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import {Header} from "../style/header.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Header/>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})