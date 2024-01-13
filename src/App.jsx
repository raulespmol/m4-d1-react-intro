import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header title={'Adopta un Perrito'}/>
      <MyCard 
        name={'Sombra'} 
        img={'https://placedog.net/300'} 
        desc={'lorem'}
        tagText={'hola'}
        tagColor={'dark'}
      />
      <Footer />
    </>
  )
}

export default App
