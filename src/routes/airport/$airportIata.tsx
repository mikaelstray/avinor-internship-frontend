import { createFileRoute } from '@tanstack/react-router'
import {AirportPage} from "../../features/airport/AirportPage.tsx";

export const Route = createFileRoute('/airport/$airportIata')({
  component: AirportPage,
})