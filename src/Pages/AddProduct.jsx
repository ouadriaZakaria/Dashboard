import React from 'react'
import Header from '../Components/Header'
import AddProductForm from '../Components/AddProductForm'

function AddProduct() {
  return (
    <div className='flex w-full h-dvh flex-col  overflow-hidden' >
        <Header pageName="Add Product" />
        <AddProductForm/>
    </div>
  )
}

export default AddProduct