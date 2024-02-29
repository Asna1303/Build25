

export default function RandomColor(){
    const[typeOfColor, setTypeOfColor]=useSate('hex');
return <div className="container">
    <button>Create HEX Color</button>
    <button>Create RGB Color</button>
    <button>Generate Random Color</button>

</div>
}