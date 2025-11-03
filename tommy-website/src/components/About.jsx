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
        <h2>About Me</h2>
        <p>
          I’m a passionate designer and developer who loves crafting clean, user-focused digital experiences.
          My main focus is on building responsive web applications and visually engaging interfaces.
        </p>
        <p>
          I enjoy learning new technologies, experimenting with animations, and turning creative ideas
          into real products.
        </p>

      </div>
    </section>
  );
}

export default About;
