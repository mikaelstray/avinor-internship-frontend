import {useParams} from "@tanstack/react-router";
import {TerminalList} from "./components/TerminalList.tsx";

export const AirportPage = () => {
    const { airportIata } = useParams({ strict: false })

    return (
        <>
            <TerminalList airportIata={airportIata} />
        </>
    )
}