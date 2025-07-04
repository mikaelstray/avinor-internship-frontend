import { useState } from "react";
import { useUpdatePaxMutation } from "../locationApi.ts";
import type {UpdateOccupancyRequest} from "../types.ts";

export const UpdatePax = () => {
    const [updatePax, { isLoading, isSuccess, error }] = useUpdatePaxMutation();

    const [locationId, setLocationId] = useState<string>('1');
    const [newPax, setNewPax] = useState<string>('0');

    const handleSubmit = async () => {

        if (!locationId || !newPax) {
            alert("Både Location ID og New Pax må fylles ut.");
            return;
        }

        try {
            const request: UpdateOccupancyRequest = {
                id: parseInt(locationId, 10),
                newPax: parseInt(newPax, 10)
            };
            await updatePax(request).unwrap();
        } catch (e) {
            console.error("En feil oppstod under oppdatering:", e);
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="locationId" style={{ display: 'block', marginBottom: '5px' }}>
                    Location ID
                </label>
                <input
                    type="number"
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="newPax" style={{ display: 'block', marginBottom: '5px' }}>
                    New Pax
                </label>
                <input
                    id="newPax"
                    type="number"
                    value={newPax}
                    onChange={(e) => setNewPax(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Oppdaterer...' : 'Oppdater Pax'}
            </button>

            {isSuccess && <div style={{ color: 'green' }}>Suksess! Mottok data gjennom ws.</div>}
            {error && <div style={{ color: 'red' }}>Feil: {'data' in error ? JSON.stringify(error.data) : 'Ukjent feil'}</div>}
        </div>
    );
};