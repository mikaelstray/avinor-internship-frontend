import {useGetLiteLocationsByAirportIataQuery} from "../../airport/airportApi.ts";
import {useMemo, useState} from "react";
import {useNavigate} from "@tanstack/react-router";
import {Select} from "@mantine/core";

interface LocationSearchProps {
    airportIata: string;
}

export const LocationSearch = ({ airportIata }: LocationSearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: airportLocations, isLoading } = useGetLiteLocationsByAirportIataQuery(airportIata);
    const navigate = useNavigate()

    const handleClick = (id: number) => {
        navigate({ to: `/airport/location/${id}` })
    };

    const selectData = useMemo(() =>
            (airportLocations ?? []).map(location => ({
                value: String(location.id),
                label: location.name,
            })),
        [airportLocations]);


    return (
        <div>
            <h2>Søk etter lokasjon</h2>
            <Select
                label="Gate"
                placeholder="Skriv for å søke..."
                searchable
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                nothingFoundMessage="Ingen treff"
                data={selectData}
                withScrollArea={false}
                styles={{ dropdown: { maxHeight: 180, overflowY: 'auto' } }}
                mt="md"
                onChange={handleClick}
                disabled={isLoading}
                w={280}
            />
        </div>
    );
};