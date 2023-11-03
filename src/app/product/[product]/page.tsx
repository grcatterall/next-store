'use client'

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import ProductRenderer from "@/app/components/store/Renderers/ProductRenderer";
import ProductSkeleton from "@/app/components/ui/blocks/product/product-skeleton";
import ProductPage from "@/app/components/ui/blocks/product/product-page";
import { Product as ProductType } from "@/app/components/store/types";

const Product = () => {
    const [product, setProduct] = useState<ProductType>();
    const productId = usePathname().split('product/')[1];

    useEffect(() => {
        const init = async () => {
            const productRenderer = new ProductRenderer();
            const productData: ProductType = await productRenderer.fetchData(`products/${productId}`);

            setProduct(productData);
        }

        init();
    }, []);

    return (
        <div className="mx-auto w-4/5">
            {product ? <ProductPage product={product} /> : <ProductSkeleton />}
        </div>
    );
}

export default Product;