import React, { useEffect } from 'react'
import style from './main.module.css'
import foto from '../Galerie/fotky/08_krepelka.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { odstavce } from './array'
import logo from './logo.jpg'

function Main() {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])

   return (
      <div className={style.vse}>
         <h1 data-aos="fade-down" className={style.nadpis}>
            <img src={logo} alt="logo" className={style.logo} />
         </h1>

         {odstavce.map(
            ({
               data_aos,
               id,
               side,
               name,
               classP,
               paragraph,
               classImg,
               img,
               alt,
               nadpis,
            }) => (
               <div key={id} /* data-aos={data_aos} */ className={style[side]}>
                  <h3 className={style[nadpis]}>{name}</h3>
                  <div className={style.flex}>
                     <p className={style[classP]}>{paragraph}</p>
                     <img className={style[classImg]} src={img} alt={alt} />
                  </div>
               </div>
            )
         )}
      </div>
   )
}

export default Main
