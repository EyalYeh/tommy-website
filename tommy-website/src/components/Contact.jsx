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
            <div className="buttons">
                <a href="https://www.facebook.com/share/1CBUE7Eyji/?mibextid=wwXIfr">Facebook</a>
                <a href="https://www.instagram.com/tommycomplex?igsh=MWJmZnJxN2JhYXJoMw%3D%3D&utm_source=qr">Instagram</a>
                <a  href="https://www.linkedin.com/in/tommy-complex-3a5a63230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkdin</a>   
            </div>

        </section>
    )
}
export default Contract