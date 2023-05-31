'use client';

import store from "@/app/api/store";
import Renderer from "../Renderer";

class CategoryRender implements Renderer {

    async fetchData() {
        const { data } = await store.get('products/categories');

        if (data.length) {
            return data;
        }

        return [];
    }

    async renderAsObjects() {
        const categories = await this.fetchData();

        const catObject = categories.map((category: string) => {
            const url = category.replace(/[^\w ]/g, '').replace(/'/g, '').replace(/ /g, '-').toLowerCase();
            return {
                name: category.charAt(0).toUpperCase() + category.slice(1), 
                href: `category/${url}`, 
                current: false
            }
        });

        return catObject;
    }
}

export default CategoryRender;