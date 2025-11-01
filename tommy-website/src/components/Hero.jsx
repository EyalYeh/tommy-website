import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import photo1 from "../assets/photo1.jpg";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // image moves INSIDE its frame (container fixed)
      gsap.fromTo(
        imgRef.current,
        { yPercent: -20 }, // start slightly higher part visible
        {
          yPercent: 20, // slide down to reveal lower part
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Tommy</h1>
        <p className="hero-subtitle">
          Crafting immersive lighting experiences that transform stages into emotions.
        </p>
        <button className="hero-button">Hire Me</button>
      </div>

      <div className="hero-image-container">
        <img ref={imgRef} src={photo1} alt="Tommy" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
