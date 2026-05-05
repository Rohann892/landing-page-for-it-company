import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200" : "py-6"}`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2 font-outfit font-bold text-2xl tracking-wider">
          <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            ⚡
          </span>
          <span className="text-slate-900">TECHNOVATE</span>
        </div>
        <ul className="hidden md:flex gap-10">
          <li>
            <a
              href="#hero"
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
