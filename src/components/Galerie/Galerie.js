import React, { useState, useEffect } from 'react'
import styles from './galerie.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import krepelkaVenku from './fotky/venkuKrepelkan.jpg'
import krepelkaVenku2 from './fotky/venkuKrepelkan2.jpg'
import grilovane from './fotky/grilovane.jpg'
import grilovane2 from './fotky/grilovane2.jpg'
import lihen from './fotky/lihen.jpg'
import './galerie.css'
import plato from '../Galerie/fotky/plato.jpg'
import nakladacky from '../Galerie/fotky/nakladacky150.jpg'
import nakladacky2 from '../Galerie/fotky/nakladacky60.jpg'
import ruznyvek from '../Galerie/fotky/líhnutí.jpg'
import krepelka from '../Galerie/fotky/krepelka.jpg'
import med from '../Galerie/fotky/med.jpg'
import logo from '../main/logo.jpg'
import slepice from '../Galerie/fotky/slepice.jpg'
import ul from '../Galerie/fotky/ul.jpg'
import kuchynuprava from '../Galerie/fotky/kuchynuprava.jpg'
import kuchynuprava2 from '../Galerie/fotky/kuchynuprava2.jpg'
import kuchynuprava3 from '../Galerie/fotky/kuchynuprava3.jpg'
const galerie = [
   {
      name: 'krepelka',
      src: krepelkaVenku,
      id: 1,
      aos: 'fade-right',
   },
   {
      name: 'vajicko',
      src: logo,
      id: 2,
      aos: 'fade-down',
   },
   {
      name: 'kure',
      src: grilovane,
      id: 3,
      aos: 'fade-left',
   },
   {
      name: 'kuratko',
      src: grilovane2,
      id: 4,
      aos: 'fade-right',
   },
   {
      name: 'nwm',
      src: krepelkaVenku2,
      id: 5,
      aos: 'fade-up',
   },
   {
      name: 'nwm',
      src: plato,
      id: 6,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: med,
      id: 7,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: nakladacky,
      id: 8,
      aos: 'fade-left',
   },

   {
      name: 'nwm',
      src: ruznyvek,
      id: 9,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: nakladacky2,
      id: 10,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: lihen,
      id: 11,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: slepice,
      id: 12,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: ul,
      id: 13,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: kuchynuprava,
      id: 14,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: kuchynuprava2,
      id: 15,
      aos: 'fade-left',
   },
   {
      name: 'nwm',
      src: kuchynuprava3,
      id: 16,
      aos: 'fade-left',
   },
]

function Galerie() {
   const [click, setClicked] = useState(false)
   const [foto, setFoto] = useState('')
   useEffect(() => {
      Aos.init({ duration: 2000, disable: 'mobile' })
   }, [])

   const clicked = (e) => {
      var target = e.target.src

      setClicked(!click)

      setFoto(target)
   }

   return (
      <div className={styles.galerie}>
         <h1 className={styles.nadpis}>Galerie</h1>{' '}
         <div className={styles.block}>
            {galerie.map(({ name, id, src, aos }) => (
               <div data-aos={aos} className={styles.containerImg} key={id}>
                  <img
                     className={styles.img}
                     src={src}
                     alt={name}
                     onClick={clicked}
                  />
               </div>
            ))}
         </div>
         <div className={click ? 'modular open' : 'modular'} onClick={clicked}>
            <img
               src={foto}
               className={click ? 'fullImg open ' : 'fullImg'}
               alt=""
            />
         </div>
      </div>
   )
}

export default Galerie
