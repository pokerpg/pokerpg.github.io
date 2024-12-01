import { NavLink, useLocation } from "react-router-dom";
import "./PokeHeader.scss";

export const PokeHeader = () => {
    const location = useLocation();

    // Dynamically determine header background color based on route
    const getHeaderColor = () => {
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
            style={{ backgroundColor: getHeaderColor() }}
        >
            <div className="logo">
                <img
                    //TODO: This is artwork from the pokemon global link. We may need to change this
                    src="../../../public/garbodor.svg"
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
