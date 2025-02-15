import React from 'react'
import Pizzas from '../features/piazzas/Pizzas'
import Disserts from '../features/disserts/Disserts'


const Home = () => {
    return (
        <div className=' w-100 overflow-hidden'>

            <video className="w-100" autoPlay muted loop src="./assets/pizzaeating.mp4"></video>

            <Pizzas />
            <br />
            <Disserts />
        </div>
    )
}

export default Home
