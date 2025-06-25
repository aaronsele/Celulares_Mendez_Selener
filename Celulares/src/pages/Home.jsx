import { celulares } from "../data/data"
import CardCelular from "../components/CardCelular"

function Home() {

  return (
 <>
 <img src="/src/assets/fotoHome.jpg"   />
 
 
 
 <h1>Productos destacados:</h1>
 <CardCelular celular={celulares[0]} />
 <CardCelular celular={celulares[4]} />
 <CardCelular celular={celulares[2]} />
 <CardCelular celular={celulares[12]} />
        
 
 
 </>
  )
}

export default Home
