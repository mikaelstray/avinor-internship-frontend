import {useGetLocationsByAirportIataQuery} from "../../airport/airportApi.ts";
import {useMemo, useState} from "react";
import {useNavigate} from "@tanstack/react-router";

interface LocationSearchProps {
    airportIata: string;
}

export const LocationSearch = ({ airportIata }: LocationSearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: airportLocations, isLoading } = useGetLocationsByAirportIataQuery(airportIata);
    const navigate = useNavigate()

    const filteredLocations = useMemo(() => {
        const locations: Location[] = airportLocations ?? [];

        if (!searchTerm) {
            return locations;
        }

        return locations.filter(location =>
            location.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [airportLocations, searchTerm]);

    const handleClick = (id: number) => {
        navigate({ to: `/airport/location/${id}` })
    };

    return (
        <div>
            <h2>Locations</h2>

            <input
                type="search"
                placeholder="Søk i locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '1rem' }} //todo limit
            />

            {isLoading && <p>Laster...</p>}

            <ul>
                {filteredLocations?.map((location) => (
                    <li
                        key={location.id}
                        onClick={() => handleClick(location.id)}
                        style={{ cursor: 'pointer', padding: '4px 0' }}
                    >
                        {location.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};