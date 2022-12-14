import { Link } from "react-router-dom";

const Navbar  = () => {
    return  <nav className="nav-bar">
        <a href="/">
           <h2>Apna Store</h2>
        </a>
        
        <a href ="/cart">
            <div className="nav-items">
                <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/null/external-add-to-cart-e-commerce-kmg-design-glyph-kmg-design-1.png"/>
                <span className="item-quantity">
                    <span>3</span>
                 </span>

             </div>

        </a>    
        
    </nav>;
}
 
export default Navbar ;