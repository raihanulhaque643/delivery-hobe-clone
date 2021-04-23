import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex flex-row justify-between my-4 mx-8">
            <div className="flex flex-col justify-center">
                <div className="text-2xl text-white font-semibold">
                Your Needs,
                </div>
                <div className="text-2xl text-yellow-300 font-semibold">
                Delivered in 1Hr.
                </div>
            </div>
            <div className="flex items-center">
                <Link to="/">
                <img className="w-16 h-auto" src={logo} alt="not found!"/>
                </Link>
            </div>
        </div>
    )
}

export default Header;
