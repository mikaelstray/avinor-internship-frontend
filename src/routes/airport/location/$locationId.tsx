import { createFileRoute } from '@tanstack/react-router'
import {GateOccupancyCard} from "../../../features/location/components/GateOccupancyCard.tsx";
import {LocationsPage} from "../../../features/location/pages/LocationsPage.tsx";

export const Route = createFileRoute('/airport/location/$locationId')({
  component: LocationsPage,
})
