
import './App.css'
import  Card  from './Card/Card'

function App() {


  return (
    <>
      <hr />
      <h2>Projects</h2>
      <div className='card-wrapper'>
          <div className='card-grid'>
        <Card 
        imageSrc='/images/ArcheryOddesy.png'
        link=''
        gameTitle='Odyssey Of Archery'
        iframeSrc='odessey-of-archery.html'
        />
        <Card
        imageSrc='/images/ArcheryOddesy.png'
        link=''
        gameTitle='Odyssey Of Archery'
        iframeSrc='odessey-of-archery.html'
        />
        </div>
      </div>

    </>
  )
}

export default App
