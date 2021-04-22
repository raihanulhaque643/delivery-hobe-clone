import React from 'react'
import background from "../assets/avatar.PNG"

const Avatar = () => {
    return (
        <div className="my-0 w-full h-52 bg-center md:bg-cover" 
        style={{ 'background-image': `url(${background})` }}>
        </div>
    )
}

export default Avatar;
