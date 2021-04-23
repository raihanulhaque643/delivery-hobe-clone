import React from 'react'

const Banner = () => {
    return (
        <div className="flex flex-row justify-between items-center my-4 mx-8 w-auto h-28 rounded-lg bg-cover bg-center px-4" style={{'backgroundImage': "url('https://media.giphy.com/media/iF38ziTbss8j6/giphy.gif')" }}>
            <div className="bg-yellow-300 font-semibold p-1 rounded border border-black text-sm italic">Free Delivery!</div>
            <div className="bg-yellow-300 font-semibold p-1 rounded border border-black text-sm italic">3 Day Returns</div>
        </div>
    )
}

export default Banner
