
import { FaStar } from 'react-icons/fa';


export default function starRating({noOfStars=5}){
return <div className="star-rating">{
    [...Array(noOfStars)].map((_,index)=>{
        return <FaStar
        
        />
    })
}

</div>
}