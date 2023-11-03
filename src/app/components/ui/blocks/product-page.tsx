import { Product } from "../../store/types";
import Rating from "./rating";
import ProductBannerList from "../../store/ProductBannerList";

const ProductPage = ({ product }: { product: Product }) => {
    return (
        <div className="pt-10 h-full">
            <div className="bg-white h-full rounded shadow-md p-4">
                <a href={`/category/${product.category}`}>&laquo; Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</a>
                <div className="flex flex-row mt-10">
                    <div className="w-1/2 p-5">
                        <div className="h-full w-100 max-h-80">
                            <img src={product.image} className="h-full object-contain mx-auto" />
                        </div>
                    </div>
                    <div className="w-1/2 p-2 flex flex-col">
                        <h1 className="mb-4 font-bold text-4xl">{product.title}</h1>
                        <div className="flex justify-between w-3/4">
                            <h2 className="mb-4 text-6xl">{`£${product.price.toFixed(2)}`}</h2>
                            <div>
                                <Rating score={product.rating.rate} count={product.rating.count} />
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="w-2/3">{product.description.replace('/', '\n')}</p>
                        </div>
                        <div className="mt-8">
                            <button className="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"><span className="relative z-10">Add to Basket</span></button>
                            <button className="before:ease ml-4 relative h-12 w-40 overflow-hidden border border-green-800 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-800 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"><span className="relative z-10">Add to Wishlist</span></button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-90 rounded-full mx-auto h-1 mt-3"></div>
                <div className="mt-4">
                    <h3>Why not look at our other products?</h3>
                </div>
                <div className="mt-10">
                    <ProductBannerList count="3" category={product.category} />
                </div>
            </div>
        </div>
    );
}

export default ProductPage;