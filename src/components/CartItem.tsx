import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart, cartItems} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)

    return (
        <>
            <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">${item.price}</p>
                        <p className="text-gray-600">Quantity: {quantity}</p>
                    </div>
                </div>
                <p className="text-gray-600"></p>
                <div className="flex items-center space-x-4">
                    <p className="text-gray-600"> ${item.price * quantity}</p>
                    <button
                        onClick={() => removeFromCart(id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out">
                        X
                    </button>
                </div>
            </div>
            <div className="mt-4 text-right">
                <p className="text-xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</p>
            </div>
        </>
    )
}