import {useMemo, useState} from "react";
import {useNavigate} from "@tanstack/react-router";
import { Select } from "@mantine/core";
import {IoIosSearch} from "react-icons/io";
import {useGetLiteGatesByAirportIataQuery} from "../../airport/airportApi.ts";

interface LocationSearchProps {
    airportIata: string;
}

export const LocationSearch = ({ airportIata }: LocationSearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: airportLocations, isLoading } = useGetLiteGatesByAirportIataQuery(airportIata);
    const navigate = useNavigate()

    const handleClick = (id: string | null) => {
        if (id) {
            navigate({ to: `/airport/location/${id}` });
        }
    };

    const groupedSelectData = useMemo(() => {
        if (!airportLocations) return [];

        const grouped = airportLocations.reduce((acc, location) => {
            const terminal = location.name.match(/^[A-Za-z]+/)?.[0] || 'Annet';

            if (!acc[terminal]) {
                acc[terminal] = [];
            }

            acc[terminal].push({
                value: String(location.id),
                label: location.name,
            });

            return acc;
        }, {} as Record<string, { value: string; label: string }[]>);

        const sortedGroups = Object.keys(grouped).sort();

        return sortedGroups.map(terminal => ({
            group: `Gate ${terminal}`,
            items: grouped[terminal],
        }));

    }, [airportLocations]);

    return (
        <div>
                <Select
                placeholder="Skriv inn din gate"
                leftSection={<IoIosSearch />}
                searchable
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                nothingFoundMessage="Ingen treff"
                data={groupedSelectData}
                withScrollArea={false}
                mt="md"
                onChange={handleClick}
                disabled={isLoading}
                w={280}
                styles={{
                    dropdown: { maxHeight: 180, overflowY: 'auto' },
                    input: {
                        '--input-placeholder-color': 'var(--ds-color-text-default)',
                        color: 'var(--ds-color-text-default)',
                        fontSize: 'var(--ds-font-size-3)',
                        fontWeight: 330,
                        lineHeight: '100%',
                        letterSpacing: '0.09px',

                        borderColor: 'var(--ds-color-border-subtle)',
                    },
                    section: {
                        color: 'var(--ds-color-text-default)',
                    },
                }}
            />
        </div>
    );
};