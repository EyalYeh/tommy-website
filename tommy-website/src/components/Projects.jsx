import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import videoProjects from "../assets/Video_Projects.mp4";

const projects = [
  {
    title: "Fashion",
    images: [
      "/projects/fashion/1.jpg",
      "/projects/fashion/2.jpg",
      "/projects/fashion/3.png",
      "/projects/fashion/4.png",
      "/projects/fashion/5.png",
      "/projects/fashion/6.png",
      "/projects/fashion/7.jpg",
      "/projects/fashion/8.jpg",
      "/projects/fashion/9.jpg",
      "/projects/fashion/10.jpg",
      "/projects/fashion/11.jpg",
    ],
  },
  {
    title: "Theater",
    images: [
      "/projects/theater/1.jpg",
      "/projects/theater/2.JPG",
      "/projects/theater/3.jpg",
      "/projects/theater/4.jpg",
      "/projects/theater/5.jpg",
      "/projects/theater/6.jpg",
      "/projects/theater/7.jpg",
      "/projects/theater/8.jpg",
      "/projects/theater/9.jpg",
      "/projects/theater/10.jpg",
    ],
  },
  {
    title: "Live Shows",
    images: [
      "/projects/live-shows/1.jpg",
      "/projects/live-shows/2.jpg",
      "/projects/live-shows/3.jpg",
      "/projects/live-shows/4.jpg",
      "/projects/live-shows/5.jpg",
      "/projects/live-shows/6.jpg",
      "/projects/live-shows/7.jpg",
      "/projects/live-shows/8.jpg",
      "/projects/live-shows/9.jpg",
      "/projects/live-shows/10.jpg",
    ],
  },
  {
    title: "Corporate",
    images: [
      "/projects/corporate/1.png",
      "/projects/corporate/2.png",
      "/projects/corporate/3.jpg",
      "/projects/corporate/4.jpg",
      "/projects/corporate/5.jpg",
      "/projects/corporate/6.jpg",
      "/projects/corporate/7.png",
      "/projects/corporate/8.png",
      "/projects/corporate/9.png",
      "/projects/corporate/10.png",
    ],
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const lastIndexRef = useRef(-1);

  const [activeProject, setActiveProject] = useState(-1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (activeProject >= 0) {
      setActiveImage(0);
    }
  }, [activeProject]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const totalSteps = projects.length + 1;
    const stepScroll = 40;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalSteps * stepScroll}%`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * totalSteps) - 1;
          const realIndex = Math.max(-1, Math.min(index, projects.length - 1));

          if (realIndex !== lastIndexRef.current) {
            lastIndexRef.current = realIndex;
            setActiveProject(realIndex);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    projects.forEach((project) => {
      project.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  const project = activeProject >= 0 ? projects[activeProject] : null;

  useEffect(() => {
    if (!project) return;

    const nextIndex = (activeImage + 1) % project.images.length;
    const prevIndex =
      activeImage === 0 ? project.images.length - 1 : activeImage - 1;

    [project.images[nextIndex], project.images[prevIndex]].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [project, activeImage]);

  return (
    <section ref={sectionRef} id="projects" className="projects">
      <video
        className="projects-video"
        src={videoProjects}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="projects-inner">
        <h1 className="projects-title">
          {project ? project.title : "Selected Projects"}
        </h1>

        {!project && (
          <p className="projects-subtitle">
            Every project I create has a story behind it. It’s about exploring
            an idea, experimenting, and then finally watching it come alive.
          </p>
        )}
      </div>

      {project && (
        <div className="project-stage">
          {project.images.length > 1 && (
            <button
              type="button"
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
            key={project.images[activeImage]}
            src={project.images[activeImage]}
            alt={project.title}
            className="project-image"
            loading="eager"
            decoding="async"
          />

          {project.images.length > 1 && (
            <button
              type="button"
              className="arrow-right"
              onClick={() =>
                setActiveImage((i) => (i + 1) % project.images.length)
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