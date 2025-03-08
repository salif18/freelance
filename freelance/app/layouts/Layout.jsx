"use client"

import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LayoutPage = ({ children }) => {
    return (
        <>
          <Header />
            <main>{children}</main>
          <Footer />
        </>
    )
}

export default LayoutPage