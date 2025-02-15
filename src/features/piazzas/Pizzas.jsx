import React, { useState, useEffect } from 'react'
import { allPizzas } from '../../data/allPizzas'
//import { useGetAllPizzasQuery } from '../../services/pizzasApi'
import Pizza from './Pizza'
import { useSelector } from 'react-redux'
import { addpage } from '../../pagecomponents/pageWhich'




const Pizzas = () => {

    const [pizzas, setPizzas] = useState(allPizzas)
    const updatedPage = useSelector(state => state.whichPage.page)
    console.log(updatedPage)
    //const { isLoading, data: pizzas } = useGetAllPizzasQuery()
    const searchQuery = useSelector(state => state.search.query);

    const filteredPizzas = pizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchQuery)
    );

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h4 className=' bg-danger w-100 text-white p-3'>Pizzas</h4>
            </div>
            <div className=' d-flex flex-wrap '>

                {
                    updatedPage === null ? (
                        pizzas?.slice(0, 12).map((pizza, index) => (
                            <Pizza pizza={pizza} key={index} />
                        ))
                    ) : updatedPage === 'pizzas' ? (
                        pizzas?.map((pizza, index) => (
                            <Pizza pizza={pizza} key={index} />
                        ))
                    ) : (
                        <p>No pizzas available for this page.</p>
                    )
                }
            </div>
        </>

    )
}

export default Pizzas
