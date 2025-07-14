import {createFileRoute} from '@tanstack/react-router'
import {AirportSearch} from "../features/airport/components/AirportSearch.tsx";

export const Route = createFileRoute('/')({
  component: AirportSearch,
})