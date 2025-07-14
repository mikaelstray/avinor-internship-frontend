import { createFileRoute } from '@tanstack/react-router'
import {LocationPage} from "../../features/location/pages/LocationPage.tsx";

export const Route = createFileRoute('/location/')({
  component: LocationPage,
})

function RouteComponent() {
  return <div>Hello "/location/"!</div>
}
