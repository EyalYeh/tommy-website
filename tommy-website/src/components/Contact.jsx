import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Contact.css";



function Contract(){
     return(
        <section id="contact" className="contact">
            <div className="contact-inner">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-under-title">Got an idea that's waiting to come alive? lets build it together</p>
                <div className="address-details">
                    <h3>
                        <span>Tommy Complex</span>
                        <span>Erich-Weinert-Straße 22</span>
                        <span>10439 Berlin</span>
                    </h3>
                    <h3>
                        <span>+49 (0) 176 7901 4103</span>
                        <span>tommycomplexlight@gmail.com</span>
                    </h3>
                </div>

                
            </div>

        </section>
    )
}
export default Contract