"use client";

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripePayementMode() {

    const [stripeToken,setTripeToken]= useState(null)
    const total = 8000

  useEffect(()=>{
      const makeRequest =async()=>{
        try{
          const res = await axios.post(`${process.env.NEXT_PUBLIC_URI}/checkout-stripe/abonnement`,{
            tokenId:stripeToken.id,
            amount:total*100
          })
          
        }catch(err){
          console.log(err)
        }
      }
     stripeToken && makeRequest()
  },[stripeToken])

  const onToken = (token)=>{
    setTripeToken(token)
  }
  return (
    <main>
    <StripeCheckout
    name='freelance'
    // billingAddress
    // shippingAddress
    description={`Votre montant est ${total}`}
    amount={total*100}
    token={onToken}
    stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
    >
      <button style={{
        background:'orangered',
        border:"none",
        padding:"0.5em",
        fontFamily:"Roboto",
        color:"white",
        cursor:"pointer",
        borderRadius:"1em"
        }}>{"S'abonner"}</button>
      </StripeCheckout>
    </main>
  )
}

export default StripePayementMode
