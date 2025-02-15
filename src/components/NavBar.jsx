import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addpage } from '../pagecomponents/pageWhich'
import { setSearchQuery } from '../features/cart/searchSlice'

const NavBar = () => {
    const [wpage, setWpage] = useState(null)
    const [hovered, setHovered] = useState(null)
    const dispatch = useDispatch()
    const pageHandler = (e) => {
        setWpage(e)
        dispatch(addpage(e))
        //setWpage('')
        //console.log(e)
    }
    const handleMouseEnter = (page) => {
        setHovered(page)
    }

    const handleMouseLeave = () => {
        setHovered(null)
    }
    const handleSearchChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg h-25">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={() => pageHandler(null)}>
                        <h1 style={{ fontFamily: "Sankofa Display" }}>
                            <img src="./assets/pizzalogo.png" alt="" style={{ width: "60px" }} />
                            <img src="./assets/pizzatext.png" alt="Local Pizzas" style={{ width: "130px", marginTop: '30px', marginLeft: '10px' }} />
                        </h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item m-1">

                                <Link
                                    className={`nav-link bg-danger text-white rounded-1 px-3 ${wpage === 'pizzas' || hovered === 'pizzas' ? '' : 'opacity-25 active'
                                        }`}

                                    aria-current="page" to="/pizzas" onClick={() => pageHandler('pizzas')}
                                    onMouseEnter={() => handleMouseEnter('pizzas')}
                                    onMouseLeave={handleMouseLeave}
                                >Pizzas</Link>
                            </li>
                            <li className="nav-item m-1" >
                                <Link
                                    className={`nav-link text-white rounded-1 px-3 ${wpage === 'desserts' || hovered === 'desserts' ? '' : 'opacity-25 active'
                                        }`}
                                    onClick={() => pageHandler('desserts')}
                                    onMouseEnter={() => handleMouseEnter('desserts')}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ backgroundColor: 'rgb(8 165 196)' }} to="/desserts">Desserts</Link>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearchChange}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default NavBar
