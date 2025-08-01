import { Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { Header } from "../../../components/Header/header.tsx";
import React from "react";

export const RootComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = /^\/airport\/[A-Z]{3}$/.test(location.pathname);
    const showBackButton = !isHome;

    const rootStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
    };

    const outletWrapperStyle: React.CSSProperties = {
        flexGrow: 1,
        overflowY: 'auto',
        position: 'relative',
    };

    return (
        <div style={rootStyle}>
            <Header showBackButton={showBackButton} onBack={() => navigate({ to: '..'})} />
            <div style={outletWrapperStyle}>
                <Outlet />
            </div>
        </div>
    );
};