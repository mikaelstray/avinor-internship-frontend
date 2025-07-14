import {useGetTerminalsByAirportIataQuery} from "../airportApi.ts";

interface TerminalListProps {
    airportIata: string;
}

export const TerminalList = ({ airportIata }: TerminalListProps) => {
    const { data: terminals, isLoading, isError, error } = useGetTerminalsByAirportIataQuery(airportIata)

    //TODO: improve with ul list etc
    return (
        <>
            <h2>Terminals</h2>
            {terminals?.map((terminal) => (
                <p>- {terminal.name}</p>
            ))}
        </>
    )
}