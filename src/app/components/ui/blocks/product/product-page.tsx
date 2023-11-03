import { Product } from "../../../store/types";
import Rating from "../rating";
import ProductBannerList from "../../../store/ProductBannerList";
import AddTo from "./add-to";

const ProductPage = ({ product }: { product: Product }) => {
    const onAddToCart = (product: Product) => {
        if (localStorage.getItem('basket')) {
            const currentBasket = JSON.parse(localStorage.getItem('basket') ?? '{}');
            if (currentBasket.items[product.id]) {
                currentBasket.items[product.id].qty = currentBasket.items[product.id].qty + 1;
            } else {
                currentBasket.items[product.id] = {
                    "title": product.title,
                    "price": product.price,
                    "img": product.image,
                    "qty": 1
                }
            }
            const itemKeys = Object.keys(currentBasket.items);
            let itemCount = 0;
            let total = 0;
            itemKeys.map((key: string) => {
                itemCount += currentBasket.items[key].qty;
                total += (currentBasket.items[key].qty * currentBasket.items[key].price);
            });

            currentBasket.itemCount = itemCount;
            currentBasket.total = total.toFixed(2);
    
            localStorage.setItem('basket', JSON.stringify(currentBasket));
        } else {
            const basket: any = {};
            basket.items = {};

            basket.items[product.id] = {
                "title": product.title,
                "price": product.price,
                "img": product.image,
                "qty": 1
            }

            basket.itemCount = 1;
            basket.total = product.price.toFixed(2);

            localStorage.setItem('basket', JSON.stringify(basket));
        }
    };

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
                            <AddTo text="Add to Basket" colour="gray-900" custom="" onClick={onAddToCart} product={product}/>
                            <AddTo text="Add to Wishlist" colour="green-800" custom="ml-4" onClick={onAddToCart} product={product}/>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-90 rounded-full mx-auto h-1 mt-3"></div>
                <div className="mt-6">
                    <h3 className="font-bold text-xl">Why not look at our other products?</h3>
                </div>
                <div className="mt-2">
                    <ProductBannerList count="3" category={product.category} />
                </div>
            </div>
        </div>
    );
}

export default ProductPage;