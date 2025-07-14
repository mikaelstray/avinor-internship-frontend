import {useParams} from "@tanstack/react-router";
import {TerminalList} from "./components/TerminalList.tsx";
import {LocationSearch} from "../location/components/LocationSearch.tsx";

export const AirportPage = () => {
    const { airportIata } = useParams({ strict: false })



    return (
        <>
            <TerminalList airportIata={airportIata} />
            <LocationSearch airportIata={airportIata} />
        </>
    )
}