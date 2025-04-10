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
import mikeProfile from './assets/mike.jpg'

// yoh
import yohProfile from './assets/yoh.jpg'
import yohSound from './assets/sound/yoh.mp3'

// paul
import paulProfile from './assets/paul.png'
import paulSound from './assets/sound/paul.mp3'

// daniel
import danielProfile from './assets/daniel.png'

// xyd
import xydProfile from './assets/xyd.jpg'

// fran
import franProfile from './assets/fran.jpg'

// dion
import dionProfile from './assets/dion.png'

function App() {
  return (
    <>
      <h1 className='web-title'>Banogang Members</h1>

      <div className='CardContainer'>
        <Card name="Eneil" description="Server Creator"
          profile={eneilProfile} ranks="legendary" sounds={eneilSound} />

        <Card name="Jord" description='Mascot'
          profile={jordProfile} ranks="epic" />

        <Card name="Seany" description='Pares Enjoyer'
          profile={seanProfile} ranks="rare" />

        <Card name="Mike" description='Protection Enjoyer'
          profile={mikeProfile} ranks="rare" sounds={mikeSound} />

        <Card name="Yoh" description='Halata'
          profile={yohProfile} ranks="rare" sounds={yohSound} />

        <Card name="Paul" description='Pokemon Trainer'
          profile={paulProfile} ranks="common" sounds={paulSound} />

        <Card name="Xyd" description="Motorista"
          profile={xydProfile} ranks="common" />

        <Card name="Daniel Padilla" description="Artista"
          profile={danielProfile} ranks="common" />

        <Card name="Fran" description="Dora"
          profile={franProfile} ranks="common" />

        <Card name="Dion" description="bossing"
          profile={dionProfile}/>

        <Card name="Zach" description="MIA"
        />

        <Card
        />
      </div>
    </>
  )
}

export default App
