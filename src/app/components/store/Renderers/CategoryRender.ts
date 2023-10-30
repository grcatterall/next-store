'use client';

import store from "@/app/api/store";
import Renderer from "../../Renderer";

class CategoryRender implements Renderer {

    async fetchData(path: string) {
        const { data } = await store.get(path);

        if (data.length) {
            return data;
        }

        return [];
    }

    async renderAsObjects(path: string) {
        const categories = await this.fetchData(path);

        const catObject = categories.map((category: string) => {
            const url = category.replace(/ /g, '%20').toLowerCase();
            return {
                name: category.replace(/%20/g, " "), 
                href: `/category/${url}`, 
                current: false
            }
        });

        return catObject;
    }
}

export default CategoryRender;