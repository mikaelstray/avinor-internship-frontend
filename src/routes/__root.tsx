import { createRootRoute } from "@tanstack/react-router";
import {RootComponent} from "../features/location/components/RootComponent.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});
