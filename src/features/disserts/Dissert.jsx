import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice';

const Dissert = ({ dissert }) => {
    const [thisDissert, setThisDissert] = useState(dissert)
    const dispatch = useDispatch();
    const addDissert = (dissert) => {
        dispatch(addToCart(dissert))
    }
    return (
        <>
            <div className='p-2 w-25 mb-2' >
                <img src={thisDissert.img} alt="" className='w-100 rounded rounded-2' />
                <h6 className='text-nowrap overflow-hidden text-truncate'>{thisDissert.name}</h6>
                <div className=' w-100 text-center '>
                    <button className='w-100 btn btn-success d-flex flex-wrap justify-content-between' onClick={() => addDissert(thisDissert)}> <span>Add</span>
                        <span>₹ {thisDissert.price.toFixed(2)}</span>
                    </button>
                </div>
            </div>

        </>
    )

}



export default Dissert
