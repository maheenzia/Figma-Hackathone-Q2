import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SingleProduct from '../components/(singleproduct)/singleproduct'

export default function page (){
    return(
        <div>
            <Navbar />
            <SingleProduct />
            <Footer />
        </div>
    )
}