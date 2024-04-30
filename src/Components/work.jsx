import './work.css'
import projectimg from '../assets/project.jpeg'
import lmsimg from '../assets/lms.jpeg'
import sentimg from '../assets/senti.jpeg'



function Work() {
    return (
        <div className="workcontainer" id="Project-section">
            <div className="worksubcontainer">
            <div className="work-title1">Visit My Portfolio</div>
            <div className="work-title2">My <span>Amazing Work</span></div>

           <div className="work-card-container">
             <div className="work-card">
                <img src={projectimg} alt="Card Image" className="projectimg" />
                <div className="workcard-title">Uber Application</div>
                <div className="workcard-desc">A Uber Application is a Software Application for Maintain the Driver and Vehicles Details and Activities Based on this Data Generates the Reports. </div>
                <div className="workcard-price">Read More &nbsp;&nbsp;<span>&#8594;</span></div>
                </div>

                <div className="work-card">
                <img src={sentimg} alt="Card Image" className="projectimg" />
                <div className="workcard-title">Sentiment analysis</div>
                <div className="workcard-desc">Sentiment analysis is the process of analyzing digital text to determine if the emotional tone of the message is positive, negative, or neutral.</div>
                <div className="workcard-price">Read More &nbsp;&nbsp;<span>&#8594;</span></div>
                </div>

                <div className="work-card-selected">
                <img src={lmsimg} alt="Card Image" className="projectimg" />
                <div className="workcard-title">Learning Mangement System</div>
                <div className="workcard-desc">A learning management system is a software application or web-based technology used to plan, implement and assess a specific learning process. </div>
                <div className="workcard-price">Read More&nbsp;&nbsp;<span>&#8594;</span></div>
                </div>

                
             </div>
             </div>
            
            
        </div>


    )
}

export default Work