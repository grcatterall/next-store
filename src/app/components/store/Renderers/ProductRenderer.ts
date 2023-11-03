'use client';

import store from "@/app/api/store";
import Renderer from "../../Renderer";

class ProductRenderer implements Renderer {

    async fetchData(path: string) {
        const { data } = await store.get(path);

        if (data) {
            return data;
        }

        return [];
    }

    async renderAsObjects(path: string) {
        const categories = await this.fetchData(path);

        const catObject = categories.map((product: string) => {
            const url = product.replace(/ /g, '%20').toLowerCase();
            return {
                name: product.replace(/%20/g, " "), 
                href: `/product/${url}`, 
                current: false
            }
        });

        return catObject;
    }
}

export default ProductRenderer;