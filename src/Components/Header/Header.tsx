import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
    const location = useLocation();

    // Dynamically determine header background color based on routing
    const getHeaderColor = () => {

        //Custom Route color checking
        if (/^\/pokedex\/[^/]+$/.test(location.pathname)) {
            //TODO: Make this return a custom color based on the pokemon type.
            return "#d322c0"; // Color for /pokedex/:additionalContent
        }

        //Base App Routes
        switch (location.pathname) {
            case "/":
                return "#ef5350";
            case "/pokedex":
                return "#42a5f5";
            case "/resources":
                return "#66bb6a";
            case "/create":
                return "#9662e4";
            case "/contact":
                return "#ffa726";
            default:
                return "#ef5350";
        }
    };

    return (
        <header
            className="poke-header"
            style={{ backgroundColor: getHeaderColor()+"88", backdropFilter:"blur(8px)" }}
        >
            <div className="logo">
                <img
                    //TODO: This is artwork from the pokemon global link. We may need to change this
                    src="/garbodor.svg"
                    alt="Header"
                    className="logo-image"
                />
                PokéRPG v0.1
            </div>
            <nav className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                    <img src="/Poke_Ball_Sprite.webp" alt="Poke Ball"/> Home
                </NavLink>
                <NavLink
                    to="/pokedex"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                    <img src="/Great_Ball_Sprite.webp" alt="Great Ball"/> Pokedex
                </NavLink>
                <NavLink
                    to="/resources"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                    <img src="/Safari_Ball_Sprite.webp" alt="Safari Ball"/> Resources
                </NavLink>
                <NavLink
                    to="/create"
                    className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                >
                    <img src="/Master_Ball_Sprite.webp" alt="Master Ball"/>Character Create
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({isActive}) => (isActive ? "active-link" : "nav-link")}
                >
                    <img src="/Park_Ball_Sprite.webp" alt="Park Ball"/> Contact
                </NavLink>
            </nav>
        </header>
    );
};
