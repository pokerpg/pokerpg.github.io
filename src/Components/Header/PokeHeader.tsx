import { NavLink, useLocation } from "react-router-dom";
import "./PokeHeader.scss";

export const PokeHeader = () => {
    const location = useLocation();

    // Dynamically determine header background color based on route
    const getHeaderColor = () => {
        switch (location.pathname) {
            case "/":
                return "#ef5350"; // Red for Home
            case "/pokedex":
                return "#42a5f5"; // Blue for Pokedex
            case "/resources":
                return "#66bb6a"; // Green for About
            case "/contact":
                return "#ffa726"; // Orange for Contact
            default:
                return "#ef5350"; // Default red
        }
    };

    return (
        <header
            className="poke-header"
            style={{ backgroundColor: getHeaderColor() }}
        >
            <div className="logo">
                <img
                    //TODO: This is artwork from the pokemon global link. We may need to change this
                    src="src/Assets/garbodor.svg"
                    alt="Header"
                    className="logo-image"
                />
                PokéRPG
            </div>
            <nav className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/pokedex"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                   Pokedex
                </NavLink>
                <NavLink
                    to="/resources"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                    Resources
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};
