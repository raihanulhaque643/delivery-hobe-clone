import React from 'react'

const Banner = () => {
    return (
        <div className="flex flex-row justify-between items-center my-4 mx-8 w-auto h-28 rounded-lg bg-cover px-4" style={{'background-image': "url('https://www.lionsroar.com/wp-content/uploads/2015/05/555b44acb80bcc99383a9b44_jon-hamm-mad-men-episode-14-season-7-part-2.jpg')" }}>
            <div className="bg-yellow-300 font-semibold p-1 rounded border border-black text-sm italic">Free Delivery!</div>
            <div className="bg-yellow-300 font-semibold p-1 rounded border border-black text-sm italic">3 Day Returns</div>
        </div>
    )
}

export default Banner
