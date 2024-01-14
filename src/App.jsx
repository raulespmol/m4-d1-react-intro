import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header'
import MyCard from './components/MyCard/MyCard'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header title={'Adopta un Perrito'} />
      <div className='container'>
        <div className="row">
          <MyCard 
            name='Luna'
            img='https://placedog.net/600'
            desc='Una perrita juguetona y cariñosa. Con su pelaje suave y ojos tiernos, Luna es la compañera perfecta para aventuras y tardes acogedoras en casa.'
            tagText='#juguetona'
            tagColor='warning'
          />
          <MyCard 
            name='Coco'
            img='https://placedog.net/500'
            desc='Con su elegancia y mirada profunda, Coco es un amigo tranquilo y protector. Si buscas un compañero fiel y noble, Coco es la elección ideal.'
            tagText='#protector'
            tagColor='primary'
          />
          <MyCard 
            name='Rocky'
            img='https://placedog.net/1000'
            desc='Rocky, el intrépido explorador de cuatro patas. Su energía y lealtad hacen que cada día sea una nueva aventura. ¿Estás listo para sumarte a su equipo?'
            tagText='#leal'
            tagColor='success'
          />
          <MyCard 
            name='Bella' 
            img='https://placedog.net/450'
            desc='Bella, la pequeña soñadora. Su dulzura y alegría son contagiosas. Si buscas alegría constante y amor sin medida, ¡Bella iluminará tu vida!'
            tagText='#alegre'
            tagColor='info'
          />
        </div>
      </div> 
      <Footer />
    </>
  )
}

export default App
