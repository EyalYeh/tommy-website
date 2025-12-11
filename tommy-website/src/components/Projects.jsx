import "./Projects.css";
import videoProjects from "../assets/Video_Projects.mp4";

function Projects() {
  return (
    <section className="projects">

      <video
        className="projects-video"
        src={videoProjects}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="projects-inner">
        <h1 className="projects-title">Selected Projects</h1>
        <p className="projects-subtitle">
          Every project I create has a story behind it. “it’s about exploring an idea, experimenting, and the. Finally watching it come alive”.
        </p>
      </div>

    </section>
  );
}

export default Projects;
