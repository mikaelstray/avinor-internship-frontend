import {useGetTerminalsByAirportIataQuery} from "../airportApi.ts";

interface TerminalListProps {
    airportIata: string;
}

export const TerminalList = ({ airportIata }: TerminalListProps) => {
    const { data: terminals, isLoading, isError, error } = useGetTerminalsByAirportIataQuery(airportIata)

    return (
        <>
            {terminals?.map((terminal) => (
                <p>{terminal.name}</p>
            ))}
        </>
    )
}