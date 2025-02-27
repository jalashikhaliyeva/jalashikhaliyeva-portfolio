import React, { useState, useRef, useEffect } from "react";
import Container from "../Container";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  // Define nav items with their target section ids
  const navItems = [
    { label: t("nav.About"), target: "hero" },
    { label: t("nav.Skills"), target: "skills" },
    { label: t("nav.Projects"), target: "projects" },
    { label: t("nav.Education"), target: "education" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value as needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Optionally, close the mobile menu after scrolling
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu if viewport is resized to 1045px or wider
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1045 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[99999999] bg-bg pb-5">
      <Container>
        <div className="flex items-center justify-between font-clash pt-5">
          {/* Site Title - always visible */}
          <div  className="cursor-pointer"  onClick={() => scrollToSection("hero")}>
            <h1 className="text-mainColor2 text-4xl menu:text-5xl">
              .shikhaliyeva
            </h1>
          </div>

          {/* Desktop Navigation: visible on screens 1045px and up */}
          <div className="hidden menu:flex items-center gap-10">
            <ul className="flex items-center gap-10 text-mainColor2 text-2xl">
              {navItems.map((item) => (
                <li
                  key={item.target}
                  className="relative group cursor-pointer"
                  onClick={() => scrollToSection(item.target)}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-[180px] h-[50px] bg-gradient-to-t from-mainColor3 via-purple500 to-purple500 text-white rounded-full border-0 outline-none cursor-pointer relative shadow-lg overflow-hidden group"
            >
              <span className="absolute w-full top-1/2 left-0 transform -translate-y-1/2 text-lg uppercase tracking-tight transition-all duration-500 group-hover:top-[-100%]">
                Contact me
              </span>
              <span className="absolute w-full top-[150%] left-0 transform -translate-y-1/2 text-lg uppercase tracking-[1px] transition-all duration-500 group-hover:top-1/2">
                Go!
              </span>
            </button>
          </div>

          {/* Mobile Navigation Toggle: visible below 1045px */}
          <div className="menu:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <IoCloseOutline className="text-mainColor2 text-3xl" />
              ) : (
                <CiMenuFries className="text-mainColor2 text-3xl" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg font-clash">
          <div className="flex items-center justify-between p-5">
            <div>
              <h1 className="text-mainColor2 text-4xl menu:text-5xl">
                .shikhaliyeva
              </h1>
            </div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <IoCloseOutline className="text-mainColor2 text-3xl" />
            </button>
          </div>
          <ul className="flex flex-col items-center pt-10 flex-1 text-mainColor2 text-3xl">
            {navItems.map((item) => (
              <li
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="cursor-pointer w-full text-center py-2 border-b gradient-border"
              >
                {item.label}
              </li>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-8 py-3 px-6 text-mainColor2 bg-mainColor3 text-lg rounded-full uppercase"
            >
              Contact me
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
