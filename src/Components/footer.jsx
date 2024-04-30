import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';




function Footer() {
    return (
        <div className="footercontainer" id="Footer-section">
            <div className="footer">
                <div className="aboutus">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="contactus">
                    <p className='title'>Contact Us</p>
                    <p><i className="fas fa-map-marker-alt"></i> Chamarajanagar</p>
                    <p><i className="fas fa-phone"></i> 1234567890</p>
                    <p><i className="far fa-envelope"></i> abc@gmail.com</p>
                </div>
            </div>

        </div>


    )
}

export default Footer