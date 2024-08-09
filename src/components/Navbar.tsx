import { Link } from 'react-router-dom'
import shoppingCartIcon from '../assets/shopping-cart.png'
import { useShoppingCart } from "../hooks/useShoppingCart";


export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg sticky top-0 z-50 mb-4">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-extrabold tracking-tight hover:text-purple-300 transition duration-300">Logo</Link>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="text-white hover:text-purple-300 font-medium transition duration-300 border-b-2 border-transparent hover:border-purple-300">Home</Link></li>
                    <li><Link to="/about" className="text-white hover:text-purple-300 font-medium transition duration-300 border-b-2 border-transparent hover:border-purple-300">About</Link></li>
                    <li><Link to="/store" className="text-white hover:text-purple-300 font-medium transition duration-300 border-b-2 border-transparent hover:border-purple-300">Store</Link></li>
                    <li>
                        <button onClick={openCart} className="focus:outline-none bg-blue-500 p-2 rounded-full relative">
                            <img src={shoppingCartIcon} alt="Shopping Cart" className="w-6 h-6 text-white filter invert transition duration-300" />
                            <span className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white">{cartQuantity}</span>                        
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}