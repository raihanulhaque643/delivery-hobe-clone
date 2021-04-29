import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import { db } from '../firebase/firebase';
import Product from '../components/Product'
import { Link } from "react-router-dom"
import Spin from '../assets/spin.gif'


const ProductsPage = ({ setCartItems, cartItems, cartPrice, setDidCardUpdate, totalNumberOfCartItems }) => {

    let [compData, setCompData] = useState([])

    let [loading, setLoading] = useState(true)

    const categoryCodeToName = {
        607: 'Most Popular In Your Elaka',
        613: 'DH - Exclusive Deals',
        1084: '.Iftari Hobe',
        28: '.Smoking Essentials',
        673: '10 Minute Meals',
        712: 'Art Supplies',
        23: 'Baby Products',
        815: 'Bangla Nostalgia',
        951: 'Bangla Street Food',
        922: 'Beaty Essentials',
        690: 'Bedroom Essentials',
        1004: 'Bangla Meat',
        592: 'Cleaning Supplies',
        1017: 'CP - Fried Chicken',
        699: 'Dairy Products',
        717: 'Designer Masks',
        835: 'Digital Bangladesh',
        1077: 'Digital Bundles',
        19: 'Electronics',
        1079: 'Emergency Medical Supplies',
        1058: 'Euro Hut',
        941: 'Feels Hobe',
        872: 'Flowers',
        1036: 'For A Hot Day',
        529: 'Groceries',
        22: 'Health & Hygiene',
        615: 'Home Bakers',
        984: 'Home Chefs',
        1096: 'Home Decor',
        910: 'Home Improvement',
        973: 'Hotel & Resort Deals',
        684: 'Ice Cream',
        26: 'Medicine',
        1064: "Men's Grooming",
        21: 'Office Supplies',
        656: 'Party Essentials',
        595: 'Rooftop Chillers',
        20: 'Snacks',
        526: 'Sweet Tooth',
        25: 'Toilertries'
    }

    const getProducts = async () => {
        
        let temp = []

        // const prodsRef = db.collection(`${query.get('category')}`);
        const prodsRef = db.collection('607');
        const prods = await prodsRef.get()
        prods.forEach(doc => {
            const newObj = {
                name: doc.data().name,
                image: doc.data().image,
                inStock: doc.data().inStock,
                subcategory: doc.data().subcategory,
                price: doc.data().price,
                id: doc.id
            }
            temp.push(newObj)
          });
        setCompData(temp)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

    let query = useQuery();

    return (
        <div className="">
            <Header title={categoryCodeToName[`${query.get('category')}`]} />
            {
                loading &&
                <div className="w-full flex justify-center">
                    <img src={Spin} alt="" className="rounded-full" style={{'width': '36px', 'height': 'auto'}}/>
                </div>
            }
            {
                cartItems.length ? 
                <div className="bg-black h-24 p-2 fixed bottom-0" style={{'width': '500px'}}>
                    <div className="flex flex-row justify-between text-white mb-2">
                        <div className="font-semibold">{totalNumberOfCartItems} Products</div>
                        <div className="font-semibold">Cart Price: ৳ {cartPrice}</div>
                    </div>
                    <Link to="/checkout" className="">
                    <button className="w-full bg-yellow-300 py-2 rounded font-semibold">
                    Checkout
                    </button>
                    </Link>
                </div>
                :
                <div></div>
            }
            <div className="my-4 mx-8 grid grid-cols-2 gap-x-8">
            {
                compData && compData.map(prod=>{
                return(
                    <Product
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    image={prod.image}
                    inStock={prod.inStock}
                    price={prod.price}
                    subcategory={prod.subcategory}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    setDidCardUpdate={setDidCardUpdate}
                    />
                )
                })
            }
            </div>
        </div>
    )
}

export default ProductsPage
