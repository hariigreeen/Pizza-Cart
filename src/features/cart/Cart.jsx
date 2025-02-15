import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const updatedCart = useSelector(state => state.cartSl.cartItems)
    return (
        <div className=' d-flex flex-column justify-content-between h-100'>
            <div className='vh-100 p-1'>
                <h1 className=' text-white p-2'>Cart</h1>
                {updatedCart.length === 0 && (<i className=' text-white'>Your basket looks a littile empty. Why not check out some of our unbeatable deals? </i>)}
                {updatedCart.map((item, index) => {
                    return (
                        <div key={index} className=' m-1'>

                            <li className=' list-unstyled bg-white'>
                                <div className=' d-flex justify-content-between p-2'>
                                    <div>
                                        <span>{item.name}</span><br />
                                        <span style={{ fontSize: "12px" }} className=' bg-success text-white'>{item.selectedOption}</span>
                                    </div>
                                    <b>₹ {item.price.toFixed(2)}</b>
                                </div>
                            </li>

                        </div>
                    )
                })}

            </div>
            <h1 className=' text-white p-2'>Total: ₹ {updatedCart.reduce((prev, item) => {
                return (
                    prev + item.price
                )
            }, 0).toFixed(2)}</h1>
        </div>
    )
}

export default Cart
