import React from 'react'
import CategoryButton from './CategoryButton'
import { Link } from "react-router-dom"

const CategoryButtons = () => {

    const categories = [
        {
            category_Id: 607,
            category_Name: 'Most Popular in Your Elaka',
            category_Gif: 'https://media.giphy.com/media/l1J3rGigrYfx8aKqI/giphy.gif'
        },
        {
            category_Id: 613,
            category_Name: 'DH - Exclusive Deals',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/07/22020600/Sokina-Wink.gif'
        },
        {
            category_Id: 1084,
            category_Name: '.Iftari Hobe',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/19053221/ezgif.com-gif-maker-1.png'
        }
    ]

    return (
        <div className="my-4 mx-8 flex justify-between flex-wrap">
            {
                categories.map((category) => {
                    return <div className="my-4">
                    <Link to={`products?category=${category.category_Id}`}>
                    <CategoryButton
                    id={category.category_Id}
                    name={category.category_Name}
                    gif={category.category_Gif}
                    />
                    </Link>
                    </div>
                })
            }
        </div>
    )
}

export default CategoryButtons
