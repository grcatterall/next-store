'use client';

import React, { useState, useEffect } from "react";
import store from "@/app/api/store";
import { Product } from "./types";
import Image from "next/image";

const ProductBannerList = () => {
    const [products, setProducts] = useState<Product[] | []>([]);

    useEffect(() => {
        const init = async () => {
            const { data } = await store.get<Product[]>('products', {
                params: {
                  limit: '6',
                },
            });

            if (data.length) {
                setProducts(data);
            }
        };
        init();
    }, []);

    if (products.length) {
        return (
            <div className="px-5 sm:px-10 md:px-20 lg:px-8 xl:px-10 py-8 bg-indigo-100" id="features">
                <div className="max-w-screen-xl mx-auto">
                    <h3 className="leading-none font-black text-3xl">
                        Features
                    </h3>

                    <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
                        {products.map((product: Product) => (
                            <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg" key={product.id}>
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
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>No products</h1>
        </div>
    )
}

export default ProductBannerList;