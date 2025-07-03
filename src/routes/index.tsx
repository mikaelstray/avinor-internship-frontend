import {createFileRoute, redirect} from '@tanstack/react-router'
import {HomePage} from "../pages/Home.tsx";
import {store} from "../app/store.ts";
import {selectIsAuthenticated} from "../features/auth/authSlice.ts";
import {LocationPage} from "../features/location/pages/LocationPage.tsx";

export const Route = createFileRoute('/')({
  component: LocationPage,
})