import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, updateCartItem } from './cartSlice'
function Mobilecart() {
    var { cartItems, discount } = useSelector(state => state.cart)
    var dispatch = useDispatch()

    function getTotal() {
        var total = cartItems.reduce((sum, item) => { return sum + item.price }, 0)
        console.log(discount, total)
        total -= (total * (discount / 100));
        console.log(total)
        return total;
    }
    return (
        <div className='d-flex vw-100 align-items-center justify-content-between p-1'>
            <div className='fs-1'>Cart</div>
            <div>
                Count:
                <span className='p-2 rounded bg-info'>{cartItems.length}</span>
            </div>
            <div>
                <b>Total: Rs. {getTotal() * 10}</b>
            </div>
            <div>
                <button className='btn btn-success'>Checkout</button>
            </div>
        </div>
    )
}

export default Mobilecart