import {useGetLiteLocationByIdQuery, useGetOccupancyStatusQuery} from "../locationApi.ts";
import {UpdatePax} from "../test/UpdatePax.tsx";

export const LocationPage = () => {
    const { data: location } = useGetLiteLocationByIdQuery(2)
    const { data: livePax } = useGetOccupancyStatusQuery(2)

    console.log(location)
    return (
        <>
            <p>{location?.name}</p>
            <p>{livePax?.pax}</p>
            <UpdatePax />
        </>
    )
}