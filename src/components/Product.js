import React from 'react'

const Product = ({ id, name, price, subcategory, inStock, image, setCartItems, cartItems }) => {

    const handleClick = () => {

        const itemExists = cartItems.find((item) => {
            return item.id === id
        })

        if (!itemExists) {
            let newItem = {
                id,
                name,
                price,
                image,
                quantity: 1
            }
    
            setCartItems([...cartItems, newItem])
        } else {
            let items = cartItems;
            for (let i=0; i<items.length; i++) {
                if(items[i].id === id) {
                    items[i].quantity += 1
                    break
                }
            }
            setCartItems(items)
        }

    }

    return (
        <div className="w-auto md:h-auto rounded-xl flex justify-center items-center text-black font-semibold my-2 py-2 bg-white flex flex-col">
            <img src={image} alt="" style={{'objectFit': 'contain', 'height': '140px', 'width': '140px'}}/>
            <div className="flex flex-col w-full h-auto p-2">
            <div className="w-full flex rounded-b-xl text-sm sm:text-md h-10">
            {name}
            </div>
            <div className="w-full rounded-b-xl text-sm sm:text-md h-10 text-gray-400">
            {subcategory}
            </div>
            <div className="w-full rounded-b-xl text-sm sm:text-md h-10">
            <button
            onClick={() => handleClick()}
            className="border w-full font-semibold p-2 rounded-md">
                <div className="flex flex-row justify-between">
                    <div className="">Buy</div>
                    <div className="">৳ {price}</div>
                </div>
            </button>
            </div>
            </div>
        </div>
    )
}

export default Product
