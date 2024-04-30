import './services.css'



function Service() {
    return (
        <div className="servicecontainer">
            <div className="service-title1"></div>
            <div className="service-title2">My <span>Education</span></div>

           <div className="service-card-container">
             <div className="serive-card">
                <div className="card-title1">Web Development</div>
                <div className="card-title2">Uber Application</div>
                <div className="card-desc">Website development broadly refers to the tasks and processes involved in creating and maintaining a website. </div>
                <div className="card-price">See Pricing &nbsp;&nbsp;<span>&#8594;</span></div>
                </div>

                <div className="serive-card">
                <div className="card-title1">Data Science</div>
                <div className="card-title2">Sentiment analysis</div>
                <div className="card-desc">Sentiment analysis is the process of analyzing digital text to determine if the emotional tone of the message is positive, negative, or neutral. </div>
                <div className="card-price">See Pricing &nbsp;&nbsp;<span>&#8594;</span></div>
                </div>

                <div className="serive-card-selected">
                <div className="card-title1">Web Development</div>
                <div className="card-title2">Web Design & Logo</div>
                <div className="card-desc">Website development broadly refers to the tasks and processes involved in creating and maintaining a website. </div>
                <div className="card-price">See Pricing &nbsp;&nbsp;<span>&#8594;</span></div>
                </div>
             </div> 
            
        </div>


    )
}

export default Service