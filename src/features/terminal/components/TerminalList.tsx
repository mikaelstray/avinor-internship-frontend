import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Details, Button, Paragraph } from '@digdir/designsystemet-react';
import { Title } from '@mantine/core';

import { useGetTerminalsByAirportIataQuery } from '../../airport/airportApi.ts';

interface TerminalListProps {
    airportIata: string;
}

export const TerminalList = ({ airportIata }: TerminalListProps) => {
    const [openTerminalId, setOpenTerminalId] = useState<number | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
    const { data: terminals, isLoading, isError } = useGetTerminalsByAirportIataQuery(airportIata);
    const navigate = useNavigate();

    if (isLoading) return <Paragraph>Laster...</Paragraph>;
    if (isError) return <Paragraph color="danger">Kunne ikke laste terminaler.</Paragraph>;

    const handleToggle = (terminalId: number) => {
        setOpenTerminalId(currentOpenId => (currentOpenId === terminalId ? null : terminalId));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title ta="center" mb={20} order={3} c="var(--ds-color-text-default)">
                Velg din gate
            </Title>
            {terminals?.map((terminal) => (
                <Details
                    key={terminal.id}
                    color="primary"
                    open={openTerminalId === terminal.id}
                >
                    <Details.Summary onClick={() => handleToggle(terminal.id)}>
                        Gate {terminal.name}
                    </Details.Summary>
                    <Details.Content>
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