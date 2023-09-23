import React from 'react'
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
        <div className="connectData">
            <div className='socialMedia'>
                <h3 id='followMe'>Follow Me</h3>
                <div className="socialConnect">
                    <a id="myid" href="https://www.linkedin.com/in/suraj-raut-a8a2111b8/" target="_blank" rel="noreferrer noopener">
                        <img id="img" src="assets/linked.png" alt="" />
                    </a>
                    <a id="myid" href="https://www.instagram.com/suraj_raut_211/" target="_blank" rel="noreferrer noopener">
                        <img id="img" src="assets/ins.png" alt="" />
                    </a>
                    <a id="myid" href="https://github.com/Surajraut123" target="_blank" rel="noreferrer noopener">
                        <img id="img" src="assets/gits.png" alt="" />
                    </a>
                </div>    
            </div>

            <div className="contactData">
                <h3 id='contactMe'>Contact me</h3>
                <div className="phone-email">
                    <div className="phone">
                        <img src="assets/ph.png" alt="loading" />
                        <a href="tel:+917875001058">+91 78750 01058</a>
                    </div>
                    <div className="emailData">
                        <img src="assets/eid.png" alt="loading" />
                        <a href="mailto:surajraut347@gmail.com">surajraut347@gmail.com</a>
                    </div>
                </div>    
            </div>
        </div>
        <footer>
            © 2023 Suraj Raut
        </footer>    
    </div>
  )
}
