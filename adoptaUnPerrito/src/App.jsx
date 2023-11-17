import Cabecera from "./assets/Header"
import Foot from "./assets/Footer"
import Card from "./assets/MyCard"


const perritos =[
    {
      id:1,
      img:"https://images.pexels.com/photos/8228488/pexels-photo-8228488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre:"Bartolo",
      descripcion:"Lleno de energia y listo para jugar.!Dale a Bartolo el hogar amoros que se merece!",
      bg:"success",
      tx:"Husky"
    },
    {
      id:2,
      img:"https://media.istockphoto.com/id/93392743/es/foto/bobtail.jpg?s=1024x1024&w=is&k=20&c=YLuMJuS9-z26sjtMKqd3l2kL-FTJpIzCodCu54CFGbg=",
      nombre:"Messi",
      descripcion:"Es juegueton, amigable y se lleva bien con los niños y otros animales,¡Haz de Messi parte de tu familia hoy mismo!",
      bg:"primary",
      tx:"Bobtail"
    },
    {
      id:3,
      img:"https://images.pexels.com/photos/16530890/pexels-photo-16530890/free-photo-of-arena-animal-perro-mascota.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre:"Gohan",
      descripcion:"Perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!",
      bg:"danger",
      tx:"Shar Pei"
    },
    {
      id:4,
      img:"https://images.pexels.com/photos/4203281/pexels-photo-4203281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre:"Princesa",
      descripcion:"Es una compañera leal y cariñosa que adora a los mimos y abrazos. ¡Ayuda a princesa a encontrar su final feliz!",
      bg:"warning",
      tx:"Beagle"
    }
]

function App() {
 

  return (
    <>
      <Cabecera Titulo="Adopta un Perrito"/>
      
      <div className="principal">
      {
        
        perritos.map(p=>{
          console.log("HOlA");
          return(
          <Card 
            key={p.id}
            srcImg={p.img}
            nomPerrito={p.nombre}
            desPerrito={p.descripcion}
            bg={p.bg}
            text={p.tx}
            
          /> 
        )
        console.log("ADIOS");
        })
      }
      </div>
      
      <Foot />
       </>
  )
}

export default App
