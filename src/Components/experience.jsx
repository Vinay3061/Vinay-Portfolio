import './experience.css'



function Experience() {
    return (

        <div className='career-container' id='cv-section'>
        <div className="career-title1">My Career Journery</div>
        <div className="career-title2">My <span>CV Resume</span></div>
        <div className='timeline-container'>
            <div>
                <h1>Education</h1>
                <ul>
                    <li style={{ '--accent-color': '#4CADAD' }}>
                    <div className="card" >
                        <div className="date">2016-2019</div>
                        <div className="title">Diploma in Computer Science & Engineering </div>
                        <div className="descr">Government Polytechnic Chamarajanagar</div>
                        </div>
                    </li>

                    <li style={{ '--accent-color': '#FBCA3E' }}>
                        <div className="card" >
                        <div className="date">2019-2022</div>
                        <div className="title">B E Computer Science & Engineering</div>
                        <div className="descr">Government Engineering College Chamarajanagar</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div>
            <h1>Experience</h1>
                <ul>
                    <li style={{ '--accent-color': '#1B5F8C' }}>
                    <div className="card" >
                        <div className="date">2023-Present</div>
                        <div className="title">Software Engineer</div>
                        <div className="descr">Popular Digital</div>
                        </div>
                    </li>

                   

                </ul>
            </div>

        </div>
        </div>

    )
}

export default Experience