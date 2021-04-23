import React from 'react'

const CategoryButton = ({ name, id, gif }) => {
    return (
        <div className="h-44 w-auto md:h-52 rounded-xl flex justify-center items-end bg-cover bg-center text-white font-semibold"
        style={{'background-image' : `url(${gif})`}}
        >
            <div className="bg-black w-full flex justify-center items-center h-8 bg-opacity-50 rounded-b-xl text-sm sm:text-md">
            {name}
            </div>
        </div>
    )
}

export default CategoryButton;
