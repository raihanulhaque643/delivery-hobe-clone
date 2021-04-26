import React from 'react'
import CartItem from '../components/CartItem'

const Checkout = ({ cartItems }) => {
    return (
        <div className="bg-white mx-8 my-4 rounded-md p-4 flex flex-col">
            <div className="flex flex-row text-xl font-semibold border-b-2">
            Shopping Bag
            </div>
            {
                cartItems &&
                cartItems.map((item) => {
                    return <CartItem
                    name={item.name}
                    id={item.id}
                    price={item.price}
                    image={item.image}
                    />
                })
            }
        </div>
    )
}

export default Checkout
