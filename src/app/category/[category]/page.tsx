'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import CategoryProductsRender from '@/app/components/store/Renderers/CategoryProductsRender';
import { Product } from '@/app/components/store/types';

const Category = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const currentCategory = usePathname().split('category/')[1];    
    const categoryName = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

    useEffect(() => {
        const init = async () => {
          const categoryProductRenderer = new CategoryProductsRender();
          const categoryProducts = await categoryProductRenderer.fetchData(currentCategory);
    
          setProducts(categoryProducts);
        }
    
        init();
      }, []);

    return (
        <div className="mx-auto w-4/5">
            <h1 className="text-xl font-bold">{categoryName}</h1>
            <div className='mt-3 flex w-max flex-wrap'>
                {products.map((product: Product) => {
                    return (
                        <div className="w-full flex-1 max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg" key={product.id}>
                            <div className="inline-block bg-white rounded-lg w-full p-4">
                                <img src={product.image} alt={product.title} className="w-full h-80 object-contain" />
                            </div>
                            <div className="p-12 lg:p-8 lg:mx-4 md:mx-2 xl:p-12">
                                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                                    {product.title}
                                </div>
                                <div className="text-sm">
                                    We guarantee that every designer you ever work with will be an awesome member for your team. We
                                    conduct personal interview with every designer to ensure that we only get the best.
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Category;