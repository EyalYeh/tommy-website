import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isVisible = true;
    let hasScrolled = false; // ✅ flag for first scroll

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!hasScrolled && currentScroll > 10) {
        hasScrolled = true; // ✅ effect activates after first scroll
      }

      if (hasScrolled) {
        if (currentScroll > lastScrollY && currentScroll > 100 && isVisible) {
          // Scrolling down → hide navbar
          gsap.to(navRef.current, { y: -100, duration: 0.6, ease: "power2.out" });
          isVisible = false;
        } else if (currentScroll < lastScrollY && !isVisible) {
          // Scrolling up → show navbar
          gsap.to(navRef.current, { y: 0, duration: 0.6, ease: "power2.out" });
          isVisible = true;
        }
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">Tommy Complex</div>
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#recommendations">Recommendations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
