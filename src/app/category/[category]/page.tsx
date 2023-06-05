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
            <div className='mt-3 gird-cols-1 xl:grid-cols-4 grid xl:gap-2 mb-6'>
                {products.map((product: Product) => {
                    return (
                        <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg" key={product.id}>
                            <div className="inline-block bg-white rounded-lg w-full p-4">
                                <img src={product.image} alt={product.title} className="w-full h-80 object-contain" />
                            </div>
                            <div className="p-2 lg:p-3 lg:mx-4 md:mx-2 xl:p-4">
                                <div className="mt-4 font-bold text-2xl tracking-wide">
                                    {product.title}
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