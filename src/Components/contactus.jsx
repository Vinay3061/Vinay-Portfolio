import './contactus.css'



function Contact() {
    return (
        <div className="contactcontainer" id="Contact-section">
            <div className="contact-title1">Get in touch</div>
            <div className="contact-title2">Contact <span>Me</span></div>

            <div className="form-container">

            <div className="main-card">
                <div className="form">

                    <label for="Name" className="form-label">Name</label><br/>
                    <input type="text"className="inputbox" placeholder="Tell us your full name" /><br/>
                    <label for="email" className="form-label" >Email</label><br/>
                    <input type="email" className="inputbox" placeholder="Tell us your email" />
                    <label for="Message" className="form-label">Message</label>
                    <textarea name="Message"cols="20" rows="4"
                        placeholder="Tell us your message" className="inputbox" ></textarea>

                    <button type="button"  id="form-button">Submit &nbsp;<span>&#8594;</span></button>
                </div>
            </div>
            </div>

        </div>


    )
}

export default Contact