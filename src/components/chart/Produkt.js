import Product from '../Products/data'
import { useContext, useState } from 'react'
import styles from './Cart.module.css'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import * as TirIcons from 'react-icons/ti'
import { Store } from '../chart/CartReducer'
import { Polygon } from 'google-maps-react'

function Produkty(props) {
   const { cart, setCart } = useContext(Store)

   const quantityHandler = (hodnota) => {
      props.handleQuntityChange(props.id, hodnota)
   }

   const decrement = () => {
      if (props.quantity === 1) {
         removeFromCart()
      } else {
         quantityHandler(-1)
      }
   }
   const increment = () => {
      quantityHandler(+1)
   }
   const removeFromCart = () => {
      setCart(cart.filter((product) => product.id !== props.id))
   }
   const currentProduct = Product.find((value) => value.id === props.id) || {}

   return (
      <>
         <cart className={styles.celek}>
            <div key={currentProduct.id} className={styles.blok}>
               <img
                  className={styles.img}
                  alt={currentProduct.name}
                  src={currentProduct.img}
               />
               <h3 className={styles.name}>{currentProduct.name}</h3>
               <div className={styles.buttons}>
                  <div className={styles.middle}>
                     <button
                        key={currentProduct.id}
                        className={styles.minus}
                        onClick={decrement}
                     >
                        <AiIcons.AiOutlineMinus />
                     </button>

                     <span className={styles.quantity}>{props.quantity}</span>

                     <button
                        key={currentProduct.id}
                        className={styles.plus}
                        onClick={increment}
                     >
                        <GrIcons.GrAdd />
                     </button>
                  </div>
                  <span className={styles.total}>
                     {props.quantity * currentProduct.price + 'Kč'}
                  </span>
               </div>{' '}
               <button
                  onClick={() => removeFromCart(currentProduct)}
                  className={styles.bin}
               >
                  <TirIcons.TiTimes />
               </button>
            </div>
         </cart>
      </>
   )
}

export default Produkty
