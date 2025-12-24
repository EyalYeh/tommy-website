import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Recommendation.css";

import simulSymbol from "../assets/Simul_Symbol.png";
import macroSymbol from "../assets/Macromedia_Symbol.png";
import fishbowlSymbol from "../assets/Fishbowl_Symbol.png";
import slaughterSymbol from "../assets/Slaughter_Symbol.png";

import fishbowlPdf from "../assets/recommendations/fishbowl.pdf";
import macroPdf from "../assets/recommendations/macromedia.pdf";
import simulPdf from "../assets/recommendations/simul.pdf";
import slaughterhousePdf from "../assets/recommendations/slaughterhouse.pdf";

function Recommendation() {
  const [open, setOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(null);
  const [title, setTitle] = useState("");

  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  const openPdf = (src, t) => {
    setPdfSrc(src);
    setTitle(t);
    setOpen(true);
  };

  const closePdf = () => setOpen(false);


  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return;

    if (open) {
 
      document.body.style.overflow = "hidden";

      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(panelRef.current, { y: 40, autoAlpha: 0 });

      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.2 });
      gsap.to(panelRef.current, { y: 0, autoAlpha: 1, duration: 0.35, ease: "power3.out" });
    } else {
      document.body.style.overflow = "";


      if (pdfSrc) {
        gsap.to(panelRef.current, { y: 40, autoAlpha: 0, duration: 0.25, ease: "power2.in" });
        gsap.to(overlayRef.current, {
          autoAlpha: 0,
          duration: 0.2,
          onComplete: () => {
            setPdfSrc(null);
            setTitle("");
          },
        });
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]); 

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closePdf();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <section id="recommendations" className="recommend">
      <div className="recommendations-inner">
        <h1 className="recommendations-title">Recommendations</h1>
      </div>

      <button className="symbol-btn" onClick={() => openPdf(fishbowlPdf, "The Fishbowl")}>
        <img src={fishbowlSymbol} alt="The Fishbowl symbol" className="simul-image" />
      </button>

      <button className="symbol-btn" onClick={() => openPdf(macroPdf, "Macromedia")}>
        <img src={macroSymbol} alt="Macromedia symbol" className="simul-image" />
      </button>

      <button className="symbol-btn" onClick={() => openPdf(simulPdf, "Simul")}>
        <img src={simulSymbol} alt="Simul symbol" className="simul-image" />
      </button>

      <button className="symbol-btn" onClick={() => openPdf(slaughterhousePdf, "Simul")}>
        <img src={slaughterSymbol} alt="Slaughter symbol" className="simul-image" />
      </button>

      {open && (
        <div
          ref={overlayRef}
          className="pdf-overlay"
          onClick={closePdf} 
        >
          <div
            ref={panelRef}
            className="pdf-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pdf-header">
              <div className="pdf-title">{title}</div>
              <button className="pdf-close" onClick={closePdf} aria-label="Close">
                ✕
              </button>
            </div>

            <iframe className="pdf-frame" src={pdfSrc} title={title} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Recommendation;
