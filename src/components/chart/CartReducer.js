import React, { useState, createContext, useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
export const CartProvider = ({ children, content }) => {
   const [cart, setCart] = useState(cartFromLocalStorage)
   const getTotalSum = () => {
      return cart.reduce(
         (sum, { price, quantity }) => sum + price * quantity,
         0
      )
   }
   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
   }, [cart])
   const addToCart = (products) => {
      let newCart = [...cart]
      let itemInCart = newCart.find((item) => item.name === products.name)

      if (itemInCart) {
         itemInCart.quantity++
      } else {
         itemInCart = {
            ...products,
            quantity: 1,
         }
         newCart.push(itemInCart)
      }
      setCart(newCart)
   }
   const { addToast } = useToasts()
   const infoAdded = () => {
      addToast('Zboží přidáno do košíků.', {
         position: 'top-center',
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      })
   }

   const value = {
      cart,
      setCart,
      addToCart,
      infoAdded,
   }
   return <Store.Provider value={value}>{children}</Store.Provider>
}

export const Store = createContext(cartFromLocalStorage)

export default CartProvider
