import { createRootRoute, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { Header } from "../components//Header/header";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";
    const showBackButton = !isHome;

    return (
      <>
        <Header showBackButton={showBackButton} onBack={() => navigate(-1)} />
        <Outlet />
      </>
    );
  },
});
