import './intro.css'
import introimage from '../assets/inro1.jpg'


function Introduction() {
  return (
    <div className="introcontainer">
      <div className="content">
        <div className="introname">Hi Im Vinay</div>
        <div className='introdest'>Im <span>Full-Stack</span> Developer</div>
        <div className="description">Im a Fullstack web Developer I have Clean Code and pixel Perfect Design</div>

        <a href="#Project-section">
          <button className='projectbutton'>My Projects&nbsp;&nbsp;<span>&#8594;</span></button>
        </a>
      </div>

      <div className="imagecontainer">
        <img src={introimage} alt="Card Image" className="introimg" />
      </div>
    </div>

  )
}

export default Introduction