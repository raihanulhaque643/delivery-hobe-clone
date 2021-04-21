import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className="flex flex-row justify-between py-8">
            <div className="flex flex-col justify-center">
                <div className="text-2xl text-white font-semibold">
                Your Needs,
                </div>
                <div className="text-2xl text-yellow-300 font-semibold">
                Delivered in 1Hr.
                </div>
            </div>
            <div className="flex items-center">
                <img className="w-16 h-auto" src={logo} alt="not found!"/>
            </div>
        </div>
    )
}

export default Header;
