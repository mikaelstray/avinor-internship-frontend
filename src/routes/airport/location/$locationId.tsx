import { createFileRoute } from '@tanstack/react-router'
import {LocationPage} from "../../../features/location/pages/LocationPage.tsx";

export const Route = createFileRoute('/airport/location/$locationId')({
  component: LocationPage,
})
