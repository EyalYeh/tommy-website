import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Recommendation.css";
import simulSymbol from "../assets/Simul_Symbol.png";
import macroSymbol from "../assets/Macromedia_Symbol.png";
import fishbowlSymbol from "../assets/Fishbowl_Symbol.png";
import slaughterSymbol from "../assets/Slaughter_Symbol.png";

import fishbowlPdf from "../assets/recommendations/fishbowl.pdf";
import macroPdf from "../assets/recommendations/macromedia.pdf";
import simulPdf from "../assets/recommendations/simul.pdf";



function Recommendation(){
    return(
        <section id="recommendations" className="recommend">
            <div className="recommendations-inner">
                <h1 className="recommendations-title">Recommendations</h1>
            </div>


            <a
                 href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                src={slaughterSymbol} alt="Slaughter House symbol" className="simul-image"/>
            </a>

            <a
                 href={fishbowlPdf}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                src={fishbowlSymbol} alt="The Fishbowl symbol" className="simul-image"/>
            </a>

            <a
                 href={macroPdf}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                src={macroSymbol} alt="Macromedia symbol" className="simul-image"/>
            </a>

    

             <a
                 href={simulPdf}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                src={simulSymbol} alt="Simul symbol" className="simul-image"/>
            </a>

        </section>
    )
    
}
export default Recommendation