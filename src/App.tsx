
import './App.css'
import  Card  from './Card/Card'

function App() {


  return (
    <>
      <h1>Dylan Hilliard</h1>
      <p>Software Developer</p>
      <hr />
      <h2>Projects</h2>
      <div className='card-wrapper'>
        <div className='card-grid'>
        <Card 
        imageSrc='/images/Screenshot_20251219_191339.png'
        link=''
        gameTitle='Chains of Rain'
        iframeSrc='chains-of-rain.html'
        />
        <Card 
        imageSrc='/images/wakefield.png'
        link=''
        gameTitle='WakeField'
        iframeSrc='wakefield.html'
        />
        <Card
        imageSrc='/images/ArcheryOddesy.png'
        link=''
        gameTitle='Odyssey Of Archery'
        iframeSrc='odessey-of-archery.html'
        />
        </div>
      </div>
      <hr />
      <h2>Skills</h2>
      <div className="skillsGrid">
        <div className="skillCard">
          <h3>Languages</h3>
          <ul className="chips">
            <li className="chip">C#</li>
            <li className="chip">C++</li>
            <li className="chip">Rust</li>
            <li className="chip">JavaScript</li>
            <li className="chip">Python</li>
            <li className="chip">SQL</li>
          </ul>
        </div>
        <div className="skillCard">
          <h3>Tools</h3>
          <ul className="chips">
            <li className="chip">Unity</li>
            <li className="chip">Visual Studio Code</li>
            <li className="chip">Git</li>
            <li className="chip">Docker</li>
            <li className="chip">GitHub</li>
          </ul>
        </div>
    
      </div>

    </>
  )
}

export default App
