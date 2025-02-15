import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice';

const Pizza = ({ pizza }) => {
    const [thisPizza, setThisPizza] = useState(pizza)
    const dispatch = useDispatch();
    const addPizza = (pizza) => {
        dispatch(addToCart(pizza))
    }
    const updatePrice = (e) => {
        //console.log(e.target.value)
        //thisPizza.price = e.target.value;

        const newPrice = parseFloat(e.target.value); // Get the new price from input (convert to number)

        setThisPizza((prevPizza) => ({
            ...prevPizza,  // Spread previous pizza properties
            price: newPrice // Update only the price
        }));

    }
    return (
        <>
            <div className='p-2 w-25 mb-2' >
                <img src={thisPizza.img} alt="" className='w-100 rounded rounded-2' />
                <h6 className='text-nowrap overflow-hidden text-truncate'>{thisPizza.name}</h6>
                <select className='p-1 w-100 mb-2' onChange={(e) => updatePrice(e)}>
                    {
                        Object.keys(thisPizza.sizeandcrust[0]).map((opt) => {
                            return (
                                <option key={opt} value={thisPizza.sizeandcrust[0][opt][0].price}>{opt}</option>
                            )
                        })
                    }
                </select>
                <div className=' w-100 text-center '>
                    <button className='w-100 btn btn-success d-flex flex-wrap justify-content-between' onClick={() => addPizza(thisPizza)}> <span>Add</span>
                        <span>₹ {thisPizza.price.toFixed(2)}</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Pizza
