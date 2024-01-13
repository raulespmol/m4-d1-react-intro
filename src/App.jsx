import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header title={'Adopta un Perrito'} />
      <div className='container'>
        <div className="row">
          <MyCard 
            name={'Sombra'} 
            img={'https://placedog.net/300'} 
            desc={'lorem'}
            tagText={'hola'}
            tagColor={'warning'}
          />
          <MyCard 
            name={'Haru'} 
            img={'https://placedog.net/300'} 
            desc={'lorem'}
            tagText={'tag'}
            tagColor={'primary'}
          />
          <MyCard 
            name={'Haru'} 
            img={'https://placedog.net/300'} 
            desc={'lorem'}
            tagText={'tag'}
            tagColor={'primary'}
          />
          <MyCard 
            name={'Haru'} 
            img={'https://placedog.net/300'} 
            desc={'lorem'}
            tagText={'tag'}
            tagColor={'primary'}
          />
        </div>
      </div> 
      <Footer />
    </>
  )
}

export default App
