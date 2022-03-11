//Assets
import Chicken from '../../assets/chicken.jpg'
import HotDog from '../../assets/hotdog.jpg'
import Mexicana from '../../assets/mexicana.jpg'
import Nachos from '../../assets/nachos.jpg'
import Papas from '../../assets/papas.jpg'
import Peperoni from '../../assets/peperoni.jpg'
import Queso from '../../assets/queso.jpg'
import Vegetariana from '../../assets/vegetariana.jpg'

const productsInfo = [
  {
    id: Math.floor(Math.random() * 10000),
    scr: Chicken,
    alt: 'Chicken',
    price: 90.0,
    desc: 'Empanada pollo',
    category: 'snacks',
  },
  {
    id: Math.floor(Math.random() * 10000),
    scr: Nachos,
    alt: 'Nachos',
    price: 90.0,
    desc: 'Nachos',
    category: 'snacks',
  },
  {
    id: Math.floor(Math.random() * 10000),
    scr: HotDog,
    alt: 'Hot dog',
    price: 90.0,
    desc: 'Hot Dog',
    category: 'snacks',
  },
  {
    id: Math.floor(Math.random() * 10000),
    scr: Papas,
    alt: 'Papas',
    price: 90.0,
    desc: 'Papas',
    category: 'snacks',
  },
  {
    id: Math.floor(Math.random() * 10000),
    scr: Mexicana,
    alt: 'Pizza a la mexicana',
    price: 90.0,
    desc: 'Pizza a la mexicana',
    category: 'pizza',
  },
  {
    id: Math.floor(Math.random() * 10000),
    scr: Peperoni,
    alt: 'Pizza de peperoni',
    price: 90.0,
    desc: 'Pizza de peperoni',
    category: 'pizza',
  },
  {
    id: Math.floor(Math.random() * 10000),
    scr: Queso,
    alt: 'Pizza de queso',
    price: 90.0,
    desc: 'Pizza de queso',
    category: 'pizza',
  },
  {
    id: Math.floor(Math.random() * 10000),
    scr: Vegetariana,
    alt: 'Pizza vegetariana',
    price: 90.0,
    desc: 'Pizza vegetariana',
    category: 'pizza',
  },
]
// const addToCart = useCartStore((state) => state.addToCart)

// const products = productsInfo.map((product, idx) => (
//   <div key={idx} className="product-container">
//     <img src={product.scr} alt={product.alt} />
//     <div className="product-info">
//       <p>{product.desc}</p>
//       <p className="price">$ {product.price}.00</p>
//     </div>
//     <div className="add-container">
//       <AddIcon color="disabled" onClick={addToCart} />
//     </div>
//   </div>
// ))

export default productsInfo
