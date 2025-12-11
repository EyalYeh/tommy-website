import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.from(aboutRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => gsap.set(aboutRef.current.children, { clearProps: "opacity,transform" }),
      });
    }
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about">
      <div className="about-inner">
        <h1>About Me</h1>
         <div className="about-text-box">
            <p>
              I’m Tommy Complex, an artist. I explore the fields of light, music, and visual art. For the past 6 years, my heart beats for the world of lights.
            </p>
            <p>
              I express lighting that doesn’t just look good, but feels alive.
            </p>
            <p>
              I love creating experiences that light people in a clean, immersive, and thoughtfully detailed way.
            </p>
            <p>
              My passion comes from curiosity, the urge to express, to experiment, and to make something meaningful out of an idea.
            </p>
            <p>
              I love being the one who shapes how the story unfolds from shadow into light.
            </p>
            <p>
              Let’s work together to create something that truly stands out.
            </p>
            <p>
              Cool fact
            </p>
            <p>
              I own a professional immersive studio, where I work with musicians, visual artists, and light designers. My setup includes surround Dolby Atmos 7.1.6, 360° projection, and lighting fixtures.
            </p>
          </div>
      </div>
    </section>
  );
}

export default About;
