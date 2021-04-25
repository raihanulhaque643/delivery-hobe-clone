import React from 'react'

const Product = ({ id, name, price, subcategory, inStock, image }) => {
    return (
        <div className="h-44 w-auto md:h-52 rounded-xl flex justify-center items-end bg-auto bg-center bg-no-repeat text-white font-semibold my-4 bg-white"
        style={{'backgroundImage' : `url(${image})`}}
        >
            <div className="bg-black w-full flex justify-center items-center h-8 bg-opacity-50 rounded-b-xl text-sm sm:text-md h-10 text-center">
            {name}
            </div>
        </div>
    )
}

export default Product
