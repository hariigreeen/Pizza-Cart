import React, { useState, useEffect } from 'react'
import { allDesserts } from '../../data/desserts'
//import { useGetAllDissertsQuery } from '../../services/dissertsApi'
import Dissert from './Dissert'



const Disserts = () => {

    //const { isLoading, data: disserts } = useGetAllDissertsQuery()
    const [disserts, setDisserts] = useState(allDesserts)

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h4 className='  w-100 text-white p-3' style={{ backgroundColor: 'rgb(8 165 196)' }}>Disserts</h4>

            </div>
            <div className=' d-flex flex-wrap '>

                {
                    disserts?.map((dissert, index) => {
                        return (
                            <Dissert dissert={dissert} key={index} />

                        )
                    })
                }
            </div>
        </>

    )
}

export default Disserts
