import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import photo1 from "../assets/photo1.jpg";
import tommy from "../assets/tommy.png";
import herophoto from "../assets/herophoto.jpg";
import videoHero from "../assets/Video_Hero.mp4";


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
    <section id="hero" ref={heroRef} className="hero" >


      <video className="hero-bg-video" src={videoHero} autoPlay muted loop playsInline/>


      <div className = "hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Light Artist and Designer</h1>
          <p className="hero-subtitle">
          </p>
        </div>

        <div className="hero-image-container">
          <img ref={imgRef} src={tommy} alt="Tommy" className="hero-image" />
        </div>


        <div className="hero-right">
          <p>
            An artist who loves the expressive aspect, and a designer who loves the technical aspect.
            My work look simple, but feels alive.

            An artist who loves the expressive aspect, and a designer who loves the technical aspect.
            My work look simple, but feels alive.
          </p>
          <h2>IMMERSING the space, not just lighting it</h2>
        </div>
      

      </div>
    </section>
  );
}

export default Hero;
