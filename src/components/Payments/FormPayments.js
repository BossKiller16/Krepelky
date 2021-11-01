import { useState, useRef, useContext } from 'react'
import { Store } from '../chart/CartReducer'
import styles from './FormPayments.module.css'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'
var contentType = require('content-type')

function FormPayments() {
   const emailRef = useRef()
   const lastNameRef = useRef()
   const numberRef = useRef()
   const uliceRef = useRef()
   const obecRef = useRef()
   const nameRef = useRef()
   const PSCRef = useRef()
   const { cart, setCart } = useContext(Store)
   var obj = contentType.parse(
      'application/x-www-form-urlencoded; charset=utf-8'
   )

   const getTotalSum = () => {
      return cart.reduce(
         (sum, { price, quantity }) => sum + price * quantity,
         0
      )
   }
   const totalSum = getTotalSum()
   console.log(totalSum)
   const stripe = useStripe()
   const elements = useElements()
   console.log(obj)

   const handleSubmit = async (e) => {
      e.preventDefault()
      const billingDetails = {
         address_city: obecRef.current.value,
         address_line1: uliceRef.current.value,
         address_country: 'CZ',
         email: emailRef.current.value,
         name: nameRef.current.value + ' ' + lastNameRef.current.value,
         phone: numberRef.current.value,
      }
      const token = await stripe
         .createToken(elements.getElement(CardElement), billingDetails)
         .then(function (result) {
            handleToken(result)
         })
   }

   async function handleToken(token) {
      console.log(token)
      const headers = {
         'Content-Type': 'application/json',
      }
      const response = await axios.post('http://localhost:4000/payment', {
         token,
         totalSum,
         cart,
      })
      const { status } = response.data
   }
   return (
      <main className={styles.main}>
         <h1 className={styles.nadpis}>Platba</h1>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form_inner}>
               <div className={styles.form_group}>
                  <label>Jméno:</label>
                  <input type="text" ref={nameRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Příjmení:</label>
                  <input type="text" ref={lastNameRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Email:</label>
                  <input type="email" ref={emailRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Tel:</label>
                  <input type="Tel" ref={numberRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Ulice a č. p.:</label>
                  <input type="text" ref={uliceRef} />
               </div>{' '}
               {/*        <div className={styles.form_group}>
                  <label>PSČ:</label>
                  <input type="text" ref={PSCRef} />
               </div> */}
               <div className={styles.form_group}>
                  <label>Obec:</label>
                  <input type="text" ref={obecRef} />
               </div>
               <div className={styles.form_group}>Platební údaje</div>
               <button type="submit" className={styles.button}>
                  <div>Celkově Zaplatit {totalSum}</div>
               </button>
            </div>
         </form>
      </main>
   )
}

export default FormPayments
