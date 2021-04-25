import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import { db } from '../firebase/firebase';

const ProductsPage = () => {

    let [compData, setCompData] = useState([])

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

        const prodsRef = db.collection(`${query.get('category')}`);
        const prods = await prodsRef.get()
        prods.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            temp.push(doc.data())
          });
        setCompData(temp)
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
        <div className="my-4 mx-8 text-white">
            {/* product page {query.get('category')} */}
            {
                compData && compData.map(prod=>{
                return(
                    <h4>{prod.name}</h4>
                )
                })
            }
        </div>
        </div>
    )
}

export default ProductsPage
