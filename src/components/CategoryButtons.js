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
        },
        {
            category_Id: 28,
            category_Name: '.Smoking Essentials',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/16065319/ezgif.com-gif-maker-1-1.gif'
        },
        {
            category_Id: 673,
            category_Name: '10 Minute Meals',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/25082148/Frozen-Foods-V2.png'
        },
        {
            category_Id: 712,
            category_Name: 'Art Supplies',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/29070721/Art-Supplies-v2-1.png'
        },
        {
            category_Id: 23,
            category_Name: 'Baby Products',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/08014859/Baby-Products-v2.png'
        },
        {
            category_Id: 815,
            category_Name: 'Bangla Nostalgia',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/11/14031849/ezgif.com-gif-maker-3.gif'
        },
        {
            category_Id: 951,
            category_Name: 'Bangla Street Food',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/20053606/ezgif.com-gif-maker-3-1.gif'
        },
        {
            category_Id: 922,
            category_Name: 'Beauty Essentials',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/16040757/ezgif.com-gif-maker-1.gif'
        },
        {
            category_Id: 690,
            category_Name: 'Bedroom Essentials',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/25083230/Bedroom-Essentials-v2-1.png'
        },
        {
            category_Id: 1004,
            category_Name: 'Bangla Meat',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/17142946/ezgif.com-gif-maker-3.jpg'
        },
        {
            category_Id: 592,
            category_Name: 'Cleaning Supplies',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/07075437/Cleaning-Supplies-v2.png'
        },
        {
            category_Id: 1017,
            category_Name: 'CP - Fried Chicken',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/03/29070844/ezgif.com-resize.jpg'
        },
        {
            category_Id: 699,
            category_Name: 'Dairy Products',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/29065104/Dairy-Products-v2-Blue.png'
        },
        {
            category_Id: 717,
            category_Name: 'Designer Masks',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/29071022/Designer-Masks-v2.png'
        },
        {
            category_Id: 835,
            category_Name: 'Digital Bangladesh',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/01/08192919/Digital-Subscription-Gift-Cards-3.png'
        },
        {
            category_Id: 1077,
            category_Name: 'Digital Bundles',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/11140611/ezgif.com-gif-maker-2.gif'
        },
        {
            category_Id: 19,
            category_Name: 'Electronics',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/07060155/Electronics-v2.png'
        },
        {
            category_Id: 1079,
            category_Name: 'Emergency Medical Supply',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/14055905/ezgif.com-gif-maker-2.jpg'
        },
        {
            category_Id: 1058,
            category_Name: 'Euro Hut',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/04133543/ezgif.com-gif-maker.jpg'
        },
        {
            category_Id: 941,
            category_Name: 'Feels Hobe',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/16065924/ezgif.com-gif-maker-2.gif'
        },
        {
            category_Id: 872,
            category_Name: 'Flowers',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/03032324/ezgif.com-gif-maker-5.gif'
        },
        {
            category_Id: 1036,
            category_Name: 'For a Hot Day',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/01050334/ezgif.com-gif-maker.gif'
        },
        {
            category_Id: 529,
            category_Name: 'Groceries',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/07081509/Groceries-v2.1-1.png'
        },
        {
            category_Id: 22,
            category_Name: 'Health & Hygiene',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/07080959/Health-Hygiene-V2-1.png'
        },
        {
            category_Id: 615,
            category_Name: 'Home Bakers',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/25055250/ezgif.com-gif-maker-7.gif'
        },
        {
            category_Id: 984,
            category_Name: 'Home Chefs',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/03/06085139/ezgif.com-gif-maker.gif'
        },
        {
            category_Id: 1096,
            category_Name: 'Home Decor',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/19054154/ezgif.com-gif-maker-1-1.jpg'
        },
        {
            category_Id: 910,
            category_Name: 'Home Improvement',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/20051933/ezgif.com-gif-maker-2-2.gif'
        },
        {
            category_Id: 973,
            category_Name: 'Hotel & Resort Deals',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/26024920/Hotel-Resort-GIF-2-Cropped.gif'
        },
        {
            category_Id: 684,
            category_Name: 'Ice Cream',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/25083315/Icecream-v2-1.png'
        },
        {
            category_Id: 26,
            category_Name: 'Medicine',
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/25082534/Medicine-v2.png'
        },
        {
            category_Id: 1064,
            category_Name: "Men's Grooming",
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/04/07091226/ezgif.com-gif-maker-1.gif'
        },
        {
            category_Id: 21,
            category_Name: "Office Supplies",
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/25082605/Office-Supplies-V2-1.png'
        },
        {
            category_Id: 656,
            category_Name: "Party Essentials",
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/18034405/ezgif.com-gif-maker-4-1.gif'
        },
        {
            category_Id: 595,
            category_Name: "Rooftop Chillers",
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/02/20062046/ezgif.com-gif-maker-6.gif'
        },
        {
            category_Id: 20,
            category_Name: "Snacks",
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/09/07052550/Snacks-v2.png'
        },
        {
            category_Id: 526,
            category_Name: "Sweet Tooth",
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2021/03/22101016/ezgif.com-gif-maker-1.gif'
        },
        {
            category_Id: 25,
            category_Name: "Toiletries",
            category_Gif: 'https://s3-ap-southeast-1.amazonaws.com/dh-public-assets/wp-content/uploads/2020/07/22020657/ezgif.com-gif-maker-2.gif'
        }
    ]

    return (
        <div className="my-4 mx-8 grid grid-cols-2 gap-x-8">
            {
                categories.map((category) => {
                    return <div className="my-4">
                    <Link to={`products?category=${category.category_Id}`}>
                    <CategoryButton
                    key={category.category_Id}
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
