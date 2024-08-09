import { useShoppingCart } from "../hooks/useShoppingCart";
import { CartItem } from "./CartItem"

type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    if (!isOpen) return null

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity">
            <div className="fixed right-0 top-0 bottom-0 w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col">
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Cart</h2>
                    <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4 space-y-4">
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}