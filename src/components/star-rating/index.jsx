
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';


export default function starRating({noOfStars=5}){

    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

return <div className="star-rating">{
    [...Array(noOfStars)].map((_,index)=>{
        return <FaStar
        key={index}
        onClick={}
        onMouseMove={}
        onMouseLeave={}
        size={40}
        />
    })
}

</div>
}