import {useNavigate} from "@tanstack/react-router";
import {useGetLiteAirportsQuery} from "../airportApi.ts";


export const AirportSearch = () => {
    const {data: airports} = useGetLiteAirportsQuery() //TODO: add isloading and infinitequery & limit

    const navigate = useNavigate()

    const handleChange = async (e) => {
        await navigate({ to: `/airport/${e.target.value}` })
    };

    return (
        <div>
            <label htmlFor="airport-select" style={{ marginRight: '8px' }}>
                Velg flyplass:
            </label>
            <select id="airport-select" onChange={handleChange} defaultValue="">
                <option value="" disabled>
                    Velg en flyplass...
                </option>

                {airports?.map((airport) => (
                    <option key={airport.id} value={airport.iata}>
                        {airport.name}
                    </option>
                ))}
            </select>
        </div>
    );
}