import {useGetLiteLocationByIdQuery} from "../locationApi.ts";

export const LocationPage = () => {
    const { data: location } = useGetLiteLocationByIdQuery(2)

    console.log(location)
    return (
        <>
            <p>{location?.name}</p>
        </>
    )
}