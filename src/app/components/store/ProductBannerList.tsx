'use client';

import React, { useState, useEffect } from "react";
import store from "@/app/api/store";
import { Product } from "./types";
import Image from "next/image";

const ProductBannerList = ({ count, category = false }: { count: string, category: boolean | string }) => {
    const [products, setProducts] = useState<Product[] | []>([]);

    useEffect(() => {
        const init = async () => {
            const { data } = await store.get<Product[]>(category ? `products/category/${category}` : 'products', {
                params: {
                    limit: count,
                },
            });

            if (data.length) {
                setProducts(data);
                console.log(data);
            }
        };
        init();
    }, []);

    if (products.length) {
        return (
            <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
                {products.map((product: Product) => (
                    <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg" key={product.id}>
                        <div className="inline-block bg-white rounded-lg w-full p-4">
                            <img src={product.image} alt={product.title} className="w-full h-80 object-contain" />
                        </div>
                        <div className="p-8">
                            <div className="mt-4 font-bold text-l tracking-wide">
                                {product.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between h-80">
            {(() => {
                let html = '';
                for (let i = 0; i < parseInt(count); i++) {
                    <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg h-full" key={i}>
                        <div className="inline-block bg-white rounded-lg w-full p-4 h-full">
                            <div className="w-full h-80 object-contain bg-gray-400 animate-pulse w-100"></div>
                        </div>
                        <div className="p-8">
                            <div className="mt-4 font-bold text-l tracking-wide bg-gray-600 animate-pulse h-4 w-100">
                            </div>
                            <div className="mt-4 font-bold text-l tracking-wide bg-gray-600 animate-pulse h-4 w-3/4">
                            </div>
                        </div>
                    </div>
                }
                return html;
            })()}
        </div>
    )
}

export default ProductBannerList;