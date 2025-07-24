import {Progress} from "@mantine/core";

interface OccupancyShowerProps {
    percent: number
}

export const OccupancyShower = ({ percent }: OccupancyShowerProps) => {
    if (percent < 50) {
        return <Progress value={20} size="lg" transitionDuration={200} />
    } else if (percent < 75) {
        return <Progress value={50} size="lg" transitionDuration={200} />
    } else {
        return <Progress value={95} size="lg" transitionDuration={200} />
    }
}