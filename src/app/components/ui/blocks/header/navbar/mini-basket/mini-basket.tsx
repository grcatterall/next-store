import { useState, useEffect } from "react";
import ItemList from "./item-list";

const MiniBasket = () => {
    const [basket, setBasket] = useState<{itemCount: number, total: number, items: any}>({itemCount: 0, total: 0, items: {}});

    useEffect(() => {
        setBasket(JSON.parse(localStorage.getItem('basket') || '{itemCount: 0, items: {}}'))   
    }, []);

    const removeItem = (id: string) => {
        const currentBasket = JSON.parse(localStorage.getItem('basket') ?? '{}');
            if (currentBasket.items[id]) {
                delete currentBasket.items[id];
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
    
            setBasket(currentBasket);
            localStorage.setItem('basket', JSON.stringify(currentBasket));
    };

    const content = !basket.itemCount 
    ? 'No items currently in your basket' 
    : <div>
        <ItemList items={basket.items} removeItem={removeItem}/>
    </div>

    return (
        <div className="bg-white p-2 absolute top-9 -left-36 shadow-lg h-70 w-80 before:w-0 before:h-0 before:border-l-[20px] before:border-l-transparent before:border-b-[26px] before:border-b-white before:border-r-[20px] before:border-r-transparent before:relative before:-top-[55px]">
            <div className="relative text-black">
                {content}
                <div>
                    <span className="text-black text-lg">Total: £{basket.total}</span>
                </div>
            </div>
        </div>
    );
}

export default MiniBasket;