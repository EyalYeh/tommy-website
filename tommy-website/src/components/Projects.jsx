import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Projects.css";

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      gsap.from(projectsRef.current.querySelectorAll(".project-card"), {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () =>
          gsap.set(projectsRef.current.querySelectorAll(".project-card"), {
            clearProps: "opacity,transform",
          }),
      });
    }
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and GSAP to showcase my projects and skills.",
      image: "https://placehold.co/600x400/0f172a/ffffff?text=Portfolio",
      link: "#",
    },
    {
      title: "E-Commerce UI",
      description:
        "A responsive online store concept built with modern React components and CSS grid.",
      image: "https://placehold.co/600x400/1e293b/ffffff?text=E-Commerce",
      link: "#",
    },
    {
      title: "Landing Page Animation",
      description:
        "A modern animated landing page using GSAP transitions and scroll effects.",
      image: "https://placehold.co/600x400/312e81/ffffff?text=Landing+Page",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-inner" ref={projectsRef}>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={proj.image} alt={proj.title} />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
