import Item from "./item";

const ItemList = ({items, removeItem}: {items: any, removeItem: any}) => {
    const itemKeys = Object.keys(items);

    return (
        <div className="overflow-y-auto max-h-60 pr-4">
            {itemKeys.map((index: string) => {
                return <Item item={items[index]} id={index} key={index} removeItem={removeItem}/>
            })}
        </div>
    )
}

export default ItemList;