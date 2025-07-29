import { createFileRoute } from '@tanstack/react-router'
import {LocationsPage} from "../../features/location/pages/LocationsPage.tsx";

export const Route = createFileRoute('/location/')({
  component: LocationsPage,
});