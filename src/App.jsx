import Card from './Card.jsx'
// eneil
import eneilProfile from './assets/eneil.jpg'
import eneilSound from './assets/sound/eneil.mp3'

// jord
import jordProfile from './assets/jord.jpg'

// sean
import seanProfile from './assets/sean.jpg'

// mike
import mikeSound from './assets/sound/mike.mp3'

// yoh
import yohProfile from './assets/yoh.jpg'
import yohSound from './assets/sound/yoh.mp3'

// paul
import paulProfile from './assets/paul.png'
import paulSound from './assets/sound/paul.mp3'

// daniel
import danielProfile from './assets/daniel.png'

// xyd
import xydProfile from './assets/xyd.png'

function App() {
  return (
    <>
      <h1 className='web-title'>Banogang Members</h1>

      <div className='CardContainer'>
        <Card name="Eneil" description="Server Creator"
          profile={eneilProfile} ranks="legendary" sounds={eneilSound} />

        <Card name="Jord" description='Mascot'
          profile={jordProfile} ranks="epic" />

        <Card name="Seany" description='Admin'
          profile={seanProfile} ranks="rare" />

        <Card name="Mike" description='Admin'
          ranks="rare" sounds={mikeSound} />

        <Card name="Yoh" description='Admin'
          profile={yohProfile} ranks="rare" sounds={yohSound} />

        <Card name="Paul" description='Pokemon Trainer'
          profile={paulProfile} ranks="common" sounds={paulSound} />

        <Card name="Xyd"
          profile={xydProfile} ranks="common" />

        <Card name="Daniel Padilla"
          profile={danielProfile} ranks="common" />

        <Card name="Fran"
          ranks="common" />

        <Card name="Dion"
        />

        <Card name="Zach"
        />

        <Card
        />
      </div>
    </>
  )
}

export default App
