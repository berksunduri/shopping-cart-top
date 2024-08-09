// src/hooks/useShoppingCart.ts
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext'; // Adjust path as necessary

export function useShoppingCart() {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
    }
    return context;
}
