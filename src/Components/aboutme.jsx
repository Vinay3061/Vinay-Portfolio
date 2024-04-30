import './aboutme.css'
import aboutimg from '../assets/about11.png'



function About() {
    return (
        <div className="aboutcontainer" id='about-section'>
            <div className="aboutimagecontainer">
                <img src={aboutimg} alt="Card Image" className="aboutimg" />
            </div>
            <div className="aboutcontent">
                <div className="abouttitle">About me</div>
                <div className="aboutname">Vinay <span>Kumar</span></div>
                <div className='aboutdesc'>Hello, Im Vinay Web developer with over 1 year of experience. Experienced with all Stages of Development for Dynamic
                    Web Projects</div>
                <div className="skilltitle">My Skills</div>
                
                <div className="aboutskills">
                <div className="skillcard">HTML</div>
                <div className="skillcard">css</div>
                <div className="skillcard">JavaScript</div>
                <div className="skillcard">React</div>
                <div className="skillcard">Python</div>
                <div className="skillcard">Github</div>
                <div className="skillcard">Django</div>
                <div className="skillcard">MySQL</div>
                </div>
                <div><button className='aboutbutton'>Learn More&nbsp;&nbsp;<span>&#8594;</span></button></div>
            </div>
        </div>


    )
}

export default About