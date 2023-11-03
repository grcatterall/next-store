const ItemCount = ({itemCount}: {itemCount: number}) => {
    if (itemCount > 0) {
        return <div className="bg-red-500 text-xs absolute p-1 w-6 -top-4 left-3 pointer-events-none rounded-full text-white">{itemCount}</div>
    }
    return <div></div>
}

export default ItemCount;