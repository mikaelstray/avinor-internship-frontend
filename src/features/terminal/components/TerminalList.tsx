import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

// Korrekt import fra @digdir/designsystemet-react
import { Details, Button, Paragraph } from '@digdir/designsystemet-react';

import { useGetTerminalsByAirportIataQuery } from '../../airport/airportApi.ts';

interface TerminalListProps {
    airportIata: string;
}

export const TerminalList = ({ airportIata }: TerminalListProps) => {
    const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
    const { data: terminals, isLoading, isError } = useGetTerminalsByAirportIataQuery(airportIata);
    const navigate = useNavigate();

    if (isLoading) return <Paragraph>Laster...</Paragraph>;
    if (isError) return <Paragraph color="danger">Kunne ikke laste terminaler.</Paragraph>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {terminals?.map((terminal) => (
                <Details key={terminal.id} color="primary">
                    <Details.Summary>Gate {terminal.name}</Details.Summary>
                    <Details.Content
                    >
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-size-3)' }}>
                            {terminal.locations.map(location => (
                                <Button
                                    key={location.id}
                                    variant={selectedLocation === location.id ? 'primary' : 'secondary'}
                                    color="primary"
                                    onClick={() => {
                                        setSelectedLocation(location.id);
                                        navigate({ to: `/airport/location/${location.id}` });
                                    }}
                                >
                                    {location.name}
                                </Button>
                            ))}
                        </div>
                    </Details.Content>
                </Details>
            ))}
        </div>
    );
};