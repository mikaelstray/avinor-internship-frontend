import {useGetLiteLocationByIdQuery, useGetOccupancyStatusQuery} from "../locationApi.ts";
import {UpdatePax} from "../test/UpdatePax.tsx";
import {useParams} from "@tanstack/react-router";

export const LocationPage = () => {
    const { locationId } = useParams({ strict: false })
    const locationIdNumber = Number(locationId)


    const { data: location } = useGetLiteLocationByIdQuery(locationIdNumber)
    const { data: livePax } = useGetOccupancyStatusQuery(locationIdNumber)

    //TODO: tanstack loader? and error handling

    return (
        <>
            <p>{location?.name}</p>
            <p>{livePax?.pax ?? 'No live pax'}</p>
            {/*<UpdatePax /> */}
        </>
    )
}