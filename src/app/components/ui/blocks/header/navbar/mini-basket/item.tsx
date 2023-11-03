const Item = ({ item, id, removeItem }: { item: {img: string, price: number, title: string, qty: number}, id: string, removeItem: any} ) => {
    return (
        <div className="flex flex-row justify-between h-20">
            <div className="h-full">
                <img src={item.img} className="h-auto w-10 object-contain max-w-20"/>
            </div>
            <div>
                <span className="text-sm text-black w-30">{item.title.slice(0, 15)}...</span>
            </div>
            <div className="flex flex-col text-black">
                <span>£{item.price}</span>
                <span className="text-sm">QTY {item.qty}</span>
            </div>
            <a onClick={() => {
                removeItem(id);
            }}>
                X
            </a>
        </div>
    )
}

export default Item;