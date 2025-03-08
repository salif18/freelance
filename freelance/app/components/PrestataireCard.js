"use client";

import React from 'react'
import styles from "../styles/_cardPrestataires.module.scss"
import StripePayementMode from '../transactions/StripePayementMode'
import PaypalCheckout from '../transactions/PayPal';
import OrangeMoneyCheckout from '../transactions/OrangeMonney';

const PrestataireCard = ({item}) => {
    return (
        <section className={styles.PrestataireCard}>
            <figure>
              <img src={item.img} alt="" />
            </figure>
            <section>
               <h2>{item.name}</h2>
               <p>{item.proffession}</p>
            </section>
            {/* <StripePayementMode/> */}
            {/* <PaypalCheckout/> */}
            {/* <OrangeMoneyCheckout/> */}
        </section>
    )
} 
export default PrestataireCard