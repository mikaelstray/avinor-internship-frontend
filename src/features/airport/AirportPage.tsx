import {useParams} from "@tanstack/react-router";
import {TerminalList} from "../terminal/components/TerminalList.tsx";
import {LocationSearch} from "../location/components/LocationSearch.tsx";
import {Group} from "@mantine/core";
import {QrCodeComponent} from "./components/QrCodeComponent.tsx";

export const AirportPage = () => {
    const { airportIata } = useParams({ strict: false })

    return (
        <>
            <Group grow align="flex-start">
                <LocationSearch airportIata={airportIata} />
                <QrCodeComponent />
                <TerminalList airportIata={airportIata} />
            </Group>
        </>
    )
}