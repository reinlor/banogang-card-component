import Card from './Card.jsx'
import placeholder from './assets/placeholder.png'
import eneilProfile from './assets/eneil.jpg'

function App() {
  return (
    <>
      <h1 className='web-title'>Banogang Members</h1>
      <Card name="Eneil" description="Legendary Gooner"
        profile={eneilProfile} rank="legendary" />
      <Card name="Seany" description="Wlang title"
         profile={placeholder} rank="rare" />
      <Card name="Mike" description="Wlang title"
         profile={placeholder} rank="rare" />
      <Card name="Jord" description="Wlang title"
         profile={placeholder} rank="rare" />
      <Card name="Yoh" description="Wlang title"
         profile={placeholder} rank="rare" />
      <Card name="Paul" description="Wlang title"
         profile={placeholder} rank="common" />
      <Card name="Xyd" description="Wlang title"
         profile={placeholder} rank="common" />
      <Card name="Daniel Padilla" description="Wlang title"
         profile={placeholder} rank="common" />
      <Card name="Fran" description="Wlang title"
         profile={placeholder} rank="common" />
      <Card name="Dion1" description="Wlang title"
         profile={placeholder}/>
      <Card name="Zach" description="Wlang title"
         profile={placeholder}/>
    </>
  )
}

export default App
