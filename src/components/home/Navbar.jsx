import React, { useState, useEffect } from 'react';
import image from '../../constants/image';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // Trigger when 60% of section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Update the active section
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        // Cleanup
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <nav className="px-[6vw] py-2 flex items-center justify-between fixed right-0 top-0 left-0 z-50 bg-[#FFFFFF] shadow-sm shadow-[#6f6e6e]">
                {/* Logo */}
                <div>
                    <img src={image.logo} alt="Logo" className="lg:w-[5vw] w-[15vw]" />
                </div>

                {/* Hamburger Menu for small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-[#333333] text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Links */}
                <div
                    className={`absolute md:static top-[60px] right-0 w-full md:w-auto md:flex items-center gap-3 text-[#333333] text-[15px] bg-white md:bg-transparent md:translate-x-0 transition-transform duration-300 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <a
                        href="#about"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'about' ? 'text-[#0197b2] border-b-[2px] border-[#0197b2] ' : ''
                        }`}
                    >
                        About
                    </a>
                    <a
                        href="#works"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'works' ? 'text-[#0197b2] border-b-[2px] border-[#0197b2]' : ''
                        }`}
                    >
                        Projects
                    </a>
                    <a
                        href="#resume"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'resume' ? 'text-[#0197b2] border-b-[2px] border-[#0197b2]' : ''
                        }`}
                    >
                        Resume
                    </a>
                    <a
                        href="#skills"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'skills' ? 'text-[#0197b2] border-b-[2px] border-[#0197b2]' : ''
                        }`}
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'contact' ? 'text-[#0197b2] border-b-[2px] border-[#0197b2]' : ''
                        }`}
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
