import { useState,useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({url,limit=5,page=1}){
    const[images,setImages]=useState([]);
    const[currentSlide,setCurrentSlide]=useState(0);
    const[errorMsg,setErrorMsg]=useState(null);
    const[loading,setLoading]=useState(false);
    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data=await response.json();

if(data){
    setImages(data);
    setLoading(false);
}
        }catch(e){
setErrorMsg(e.message);
        }

    }

    useEffect(() => {
        if(url!=='') fetchImages(url)
        }, [url])
    if(loading){
        return<div>Loading data! Please wait!</div>
    } 
    if(errorMsg!==null){
        return <div>Error occured! {errorMsg}</div>
    }

    return <div className="container">
    <BsArrowLeftCircleFill className="arrow arrow-left"/>
    {
        images && images.length ?
        images.map(imageItem=>(
            <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className="current-image"
            />
        ))
        : null
    }
    <BsArrowRightCircleFill />
    </div>;
}