import {useParams} from "@tanstack/react-router";
import {TerminalList} from "../terminal/components/TerminalList.tsx";
import {LocationSearch} from "../location/components/LocationSearch.tsx";
import {Group} from "@mantine/core";

export const AirportPage = () => {
    const { airportIata } = useParams({ strict: false })

    return (
        <>
            <Group grow align="flex-start">
                <LocationSearch airportIata={airportIata} />
                <TerminalList airportIata={airportIata} />
            </Group>
        </>
    )
}