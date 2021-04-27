import React from 'react'

const CartItem = ({ id, name, price, image }) => {
    return (
        <div className="flex flex-col min-h-56 max-h-auto border rounded-md p-2 my-2 border-b-4">
            <div className="flex flex-row w-full border-b">
                <div className="flex flex-col w-1/3 justify-center items-center">
                    <img src={image} alt="" style={{ 'height': 'auto', 'width': '80px' }}/>
                </div>
                <div className="flex flex-col w-2/3 mt-2 font-semibold">
                    {name}
                </div>
            </div>
            <div className="flex flex-row justify-end py-2 font-semibold">
                Tk. {price}
            </div>
        </div>
    )
}

export default CartItem
