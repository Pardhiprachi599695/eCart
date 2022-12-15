import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import product from '../data/products.json'
import { addToCart } from '../features/cartSlice';


const productList =product.products
const Home = () => {
    const dispatch =useDispatch();
    const history =useHistory();
    
    const handleAddToCart =(p)=>{
        dispatch(addToCart(p));
        history.push('/cart');
        window.location.reload(false);

    }
    
    return ( <div className='home-container'>
          <h2>Products</h2>
          <div className='products'>
          {productList.map(p => <div key={p.id} className="product">
            <img src={p.image} alt={p.name}/>
            <h3>{p.name}</h3>
            <p>{p.description}</p>

            <div className='details'>
                <h4>Price :</h4>
                <span className='price'>₹{p.price}</span>
                
            </div>
          
             <button onClick={()=>handleAddToCart(p)}>Add To Cart</button>

            
          </div>)}
           
          </div>
     </div>
     );
}
console.log(product)
export default Home;