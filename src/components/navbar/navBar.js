import React, { useEffect, useState } from "react";
import NavLink from "./navLink";
import "./css/navBar.css";
import Logo from './Logo.png';

const NavBar = (props) => {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`${scrolled ? 'Nav-scrolled' : 'Nav'}`}>
            <div onClick={() => handleClick(`Home`)} className="LogoContainer">
                <img className="Logo" alt="Peng Crow as a logo"src={Logo} />
                <span className="PengCrow">PengCrow</span>
            </div>
            <NavLink isOpen = {isOpen} />

            <div className="navbar-burger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'active' : ''}`}></div>
                <div className={`line ${isOpen ? 'active' : ''}`}></div>
                <div className={`line ${isOpen ? 'active' : ''}`}></div>
            </div>
        </nav>
    )

};

export default NavBar;

