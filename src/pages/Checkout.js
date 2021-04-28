import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import Partners from '../components/Partners';

const Checkout = ({ cartItems, deleteItem }) => {

    let total= 0;

    cartItems.forEach((item) => {
        let subTotal = item.price * item.quantity
        total += subTotal
    })

    let serviceCharge = Math.floor(0.095 * total)

    const deliveryFee = 60;
    const orderProcessingFee = 0;
    const VAT = 0;
    const couponDiscount = 60;

    let net = total + serviceCharge + deliveryFee + orderProcessingFee + VAT - couponDiscount;
    

    const handleCheckout = () => {
        alert('Your order will be delivered within the next 1 hour.')
    }


    useEffect(() => {
        // window.scrollTo(0, 0)
    }, [])

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
                    deleteItem={(id) => deleteItem(id)}
                    quantity={item.quantity}
                    />
                })
            }
            <div className="flex flex-row justify-between items-center p-4 border my-4 rounded-md">
                <div className="">
                    <span className="text-gray-600">Promo Applied</span>
                    <br/>
                    <span className="text-gray-600 font-semibold">FreeDeliveryHobe!</span>
                </div>
                <div className="font-semibold bg-yellow-300 py-1 px-2 rounded-md">
                Tk 60 off
                </div>
            </div>
            <div className="flex flex-col justify-between items-center p-4 border-t-2 border-b-2 border-dotted">
                <div className="flex flex-row justify-between w-full text-gray-400 text-sm my-1">
                    <div className="flex flex-col">Cart Price:</div>
                    <div className="flex flex-col">Tk {total}</div>
                </div>
                <div className="flex flex-row justify-between w-full text-gray-400 text-sm my-1">
                    <div className="flex flex-col">Service Charge (up to 9.5%):</div>
                    <div className="flex flex-col">Tk {serviceCharge}</div>
                </div>
                <div className="flex flex-row justify-between w-full text-gray-400 text-sm my-1">
                    <div className="flex flex-col">Order Processing Fee:</div>
                    <div className="flex flex-col">Tk. {orderProcessingFee}</div>
                </div>
                <div className="flex flex-row justify-between w-full text-gray-400 text-sm my-1">
                    <div className="flex flex-col">VAT:</div>
                    <div className="flex flex-col">Tk. {VAT}</div>
                </div>
                <div className="flex flex-row justify-between w-full text-gray-400 text-sm my-1">
                    <div className="flex flex-col">Delivery Fee:</div>
                    <div className="flex flex-col">Tk. {deliveryFee}</div>
                </div>
                <div className="flex flex-row justify-between w-full text-gray-400 text-sm my-1 text-red-600 font-semibold">
                    <div className="flex flex-col">Coupon Discount:</div>
                    <div className="flex flex-col">- Tk. {couponDiscount}</div>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full text-gray-400 text-sm my-1 p-4">
                <div className="flex flex-col text-black text-2xl font-semibold">Total:</div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-end  text-black text-2xl font-semibold">Tk {net}</div>
                    <div className="flex flex-row">item prices may vary</div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center border rounded-md">
                <button
                onClick={() => handleCheckout()}
                className="h-12 w-full font-semibold text-white bg-black rounded-md">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Checkout
