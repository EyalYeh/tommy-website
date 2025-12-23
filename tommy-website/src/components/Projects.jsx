import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import videoProjects from "../assets/Video_Projects.mp4";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Fashion", images: ["/projects/fashion/1.jpg",
                               "/projects/fashion/2.jpg", 
                               "/projects/fashion/3.png",
                               "/projects/fashion/4.png",
                               "/projects/fashion/5.png",
                               "/projects/fashion/6.png",
                               "/projects/fashion/7.jpg",
                               "/projects/fashion/8.jpg",
                               "/projects/fashion/9.jpg",
                               "/projects/fashion/10.jpg",
                               "/projects/fashion/11.jpg"] },
  { title: "Theater", images: ["/projects/theater/1.jpg",
                               "/projects/theater/2.JPG", 
                               "/projects/theater/3.jpg",
                               "/projects/theater/4.jpg",
                               "/projects/theater/5.jpg",
                               "/projects/theater/6.jpg",
                               "/projects/theater/7.jpg",
                               "/projects/theater/8.jpg",
                               "/projects/theater/9.jpg",
                               "/projects/theater/10.jpg"] },
  { title: "Live Shows", images: ["/projects/live-shows/1.jpg", 
                                  "/projects/live-shows/2.jpg",
                                  "/projects/live-shows/3.jpg",
                                  "/projects/live-shows/4.jpg",
                                  "/projects/live-shows/5.jpg",
                                  "/projects/live-shows/6.jpg",
                                  "/projects/live-shows/7.jpg",
                                  "/projects/live-shows/8.jpg",
                                  "/projects/live-shows/9.jpg",
                                  "/projects/live-shows/10.jpg"] },
  { title: "Corporate", images: ["/projects/corporate/1.png", 
                                  "/projects/corporate/2.png",
                                  "/projects/corporate/3.jpg",
                                  "/projects/corporate/4.jpg",
                                  "/projects/corporate/5.jpg",
                                  "/projects/corporate/6.jpg",
                                  "/projects/corporate/7.png",
                                  "/projects/corporate/8.png",
                                  "/projects/corporate/9.png",
                                  "/projects/corporate/10.png"] },
];

function Projects() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(-1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [activeProject]);

  useEffect(() => {
    const totalSteps = projects.length + 1;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalSteps * 100}%`,
        pin: true,
        scrub: true,
        anticipatePin: 1,

        onUpdate: (self) => {
          const index = Math.floor(self.progress * totalSteps) -1;
          const realIndex = Math.max(-1, Math.min(index,projects.length - 1))
          setActiveProject(realIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const project = projects[activeProject];

  return (
    <section ref={sectionRef} id="projects" className="projects">
      <video
        className="projects-video"
        src={videoProjects}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="projects-inner">
        <h1 className="projects-title">
          {activeProject === -1
            ? "Selected Projects"
            : project.title}
        </h1>

        {activeProject === -1 && (
          <p className="projects-subtitle">
            Every project I create has a story behind it. It’s about exploring
            an idea, experimenting, and then finally watching it come alive.
          </p>
        )}
      </div>

      {activeProject >= 0 && (
        <div className="project-stage">
          {project.images.length > 1 && (
            <button
              className="arrow-left"
              onClick={() =>
                setActiveImage((i) =>
                  i === 0 ? project.images.length - 1 : i - 1
                )
              }
            >
              ←
            </button>
          )}

          <img
            src={project.images[activeImage]}
            alt={project.title}
            className="project-image"
          />

          {project.images.length > 1 && (
            <button
              className="arrow-right"
              onClick={() =>
                setActiveImage((i) =>
                  (i + 1) % project.images.length
                )
              }
            >
              →
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Projects;
