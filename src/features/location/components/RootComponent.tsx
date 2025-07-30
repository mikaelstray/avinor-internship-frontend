import { Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { Header } from "../../../components/Header/header.tsx";
import React from "react";

export const RootComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Mer robust logikk for å sjekke "hjem"-siden (se punkt 2)
    const isHome = /^\/airport\/[A-Z]{3}$/.test(location.pathname);
    const showBackButton = !isHome;

    const rootStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh', // Bruker dynamisk viewport-høyde for best resultat på mobil
    };

    const outletWrapperStyle: React.CSSProperties = {
        flexGrow: 1, // Sørger for at denne div-en fyller resten av plassen
        overflowY: 'auto', // Legger til scrolling kun for innholdet om nødvendig
        position: 'relative', // Ofte nyttig for posisjonering av barn
    };

    return (
        <div style={rootStyle}>
            {/* Navigerer relativt "opp" ett nivå. Mer robust enn navigate(-1) */}
            <Header showBackButton={showBackButton} onBack={() => navigate({ to: '..'})} />
            <div style={outletWrapperStyle}>
                <Outlet />
            </div>
        </div>
    );
};