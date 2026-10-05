import './Products.css';
import ProductCard from './ProductCard/ProductCard'
import favorire1 from '../../assets/images/favorire1.webp';
import favorire2 from '../../assets/images/favorire2.webp';
import favorire3 from '../../assets/images/favorire3.webp';
import favorire4 from '../../assets/images/favorire4.webp';

import useRevealOnView from "../../hooks/useRevealOnView";


const ProductsArray = [
    {name: 'Beef Recipe', image: favorire1, rating: '4.9 (108)',price: '$25.99'},
    {name: 'Dinosaur Toy', image: favorire2, rating:'4.8 (73)',price: '$16.99'},
    {name: 'Dog Treats', image: favorire3, rating:'4.8 (94)',price: '$12.99'},
    {name: 'Premium Collar', image: favorire4, rating:'4.7 (58)',price: '$24.99'}
]
function Products(){

    const titleReveal = useRevealOnView();
    const paragraphReveal = useRevealOnView();

    return(
        <section className='Products'>
            <div className='container'>
                <div className='Products-content'>
                    <div className='Products-title'>
                        <h1
                            ref={titleReveal.elementRef}
                            className={titleReveal.isVisible ? "show" : ""}
                        >Happy Paws' Favorites</h1>
                        <p
                            ref={paragraphReveal.elementRef}
                            className={paragraphReveal.isVisible ? "show" : ""}
                        >Discover the products pets love the most</p>
                    </div>

                    <div className='Products-list'>
                        <h2 className='active'>All</h2>
                        <h2>Food</h2>
                        <h2>Toys</h2>
                        <h2>Treats</h2>
                        <h2>Essentials</h2>
                    </div>

                    <div className='Products-grid'>
                        {
                        ProductsArray.map((productsarray) => (
                            <ProductCard
                                key={productsarray.name}
                                name = {productsarray.name}
                                image  = {productsarray.image}
                                rating = {productsarray.rating}
                                price = {productsarray.price}
                                />
                        ))
                    }
                    </div>
                    
                    <div className='Products-link'>
                        <a href="">
                            <span>See All Products </span>
                            <span className='Products-link-arrow'>→</span>
                             </a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Products;