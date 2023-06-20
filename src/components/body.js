import Nav from "./nav"
import Banner from "./banner"
import RightBanners from "./right_banners"
import CategoriesCard from "./categories_card"
import { Categories } from "./categories"
import { Product } from "./product"
import ProductCard from "./productCard"

export default function Body(){

    const new_categories = Categories.map((catCard, index)=>{
        return <CategoriesCard key={index} id={catCard.id} imgPath={catCard.imgPath} text={catCard.text}/>
    })

    const new_products = Product.map((product)=>{
        return <ProductCard key={product.id} id={product.id} discount={product.discount} productImg={product.productImg} productName={product.productName}  amount={product.amount} ex_amt={product.ex_amt}/>
    })
    
    return(
        <main>
            <section className="nav_banner_sect">
                <Nav/>
                <Banner/>
                <RightBanners/>
            </section>

            <section className="categories">
                <div className="categories_div">{new_categories}</div>
            </section>

            <section className="products">
                <h2>Top selling items</h2>
                <div className="products_div">
                    {new_products}
                </div>
            </section>
            
        </main>
    )
}