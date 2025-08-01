import {useMemo} from "react";
import type {SeatingInfo} from "../types";
import { IoPerson } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import {FaUsers} from "react-icons/fa";

export const useSeatingInfo = (percentage: number): SeatingInfo => {
    return useMemo(() => {
        const p = Math.max(0, percentage);

        if (p <= 40) {
            return {
                title: 'Mye ledig sitteplass',
                statusLabel: 'Mye ledig',
                description:
                    'Det er for tiden lav pågang og gode muligheter for å finne ledig sitteplass i dette området.',
                color: 'var(--ac-alert-success-bg, #84B88A)',
                icon: <IoPerson title="Ikon av en person" size={24} color="var(--mantine-color-gray-6)"/>,
                fillColor: '#8FC997',
                backgroundColor: '#DAEDDD'
            };
        }

        if (p < 86) {
            return {
                title: 'Noe ledig sitteplass',
                statusLabel: 'Noe ledig',
                description: 'Det er en del pågang i området, men fortsatt tilgjengelige sitteplasser.',
                color: 'var(--ac-alert-warning-bg, #E1B868)',
                icon: <BsFillPeopleFill title="Ikon av 2 personer" size={24} color="var(--mantine-color-gray-6)"/>,
                fillColor: '#ECC56B',
                backgroundColor: '#FAE6C6'
            };
        }

        return {
            title: 'Lite ledig sitteplass',
            statusLabel: 'Lite ledig',
            description: 'Det er høy pågang akkurat nå, og det kan være vanskelig å finne sitteplass.',
            color: 'var(--ac-alert-error-bg, #E56A6A)',
            icon: <FaUsers title="Ikon av en gruppe personer" size={24} color="var(--mantine-color-gray-6)"/>,
            fillColor: '#F45F63',
            backgroundColor: '#FDE2E3'
        };
    }, [percentage]);
};