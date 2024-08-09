import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number;
    title: string;
    price: number;
    image: string;
}
export function StoreItem({id, title, price, image}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}= useShoppingCart()    
    const quantity = getItemQuantity(id);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg relative flex flex-col h-96">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{title}</div>
            </div>
            <div className="px-6 py-4 flex justify-between items-center mt-auto">
                <div>
                    {quantity === 0 ? (
                        <button onClick={() => increaseCartQuantity(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                           + Add to Cart
                        </button>
                                        ) : 
                                    (
                                        <div className="flex items-center">
                                            <button onClick={() => decreaseCartQuantity(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
                                                -
                                            </button>
                                            <span className="bg-gray-200 py-2 px-4">
                                                {quantity}
                                            </span>
                                            <button onClick={() => increaseCartQuantity(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                                                +
                                            </button>
                                            <button onClick={() => removeFromCart(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                                Remove
                                            </button>
                                        </div>
                                    )}                </div>
                <div className="bg-white px-2 py-1 rounded-lg shadow">
                    <p className="text-gray-900 font-bold text-xl">${price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}