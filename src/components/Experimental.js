import React, {useState} from "react";
import insertionSort from "../algorithms/insertionSort";
import Graph from './Graph'

const Experimental = () => {
    const [userInput, setUserInput] = useState('')
    const [arr, setArr] = useState([]);
    const [key, setKey] = useState('1');
    const [visual, setVisual] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    let dict = new Object();
    dict['1'] = (x) => [x.slice()];
    dict['2'] = insertionSort;


    const handleChange = (event) => {
        var bruh = event.target.value.split(" ").map(i => Number(i));
        setUserInput(event.target.value)
        setArr(bruh);
    }



    const handleKey = (event) => {
        setKey(event.target.value)
    }



    const sort = () => {
        if(!isSorting){
            setIsSorting(true)
            var temp = dict[key](userInput.split(" ").map(i => Number(i)))
            var i = 0;

            var interval = setInterval(() => {
                setVisual(temp[i]);
                i++
                if(i >= temp.length){clearInterval(interval)}
            }, 250)
            setIsSorting(false)
        }
    }

    

 

    return(
        <div>
            <input type='text' onChange={handleChange} ></input>
            <button onClick={sort} >Sort</button>
            <select onChange={handleKey}>
                <option value="1">WIP</option>
                <option value="2">InsertionSort</option>
            </select>
            {/* <p>{arr.map(i => String(i) + " ")}</p>
            <p>{visual.map(i => String(i) + " ")}</p> */}
            <Graph data={visual}></Graph>
        </div>
    )
}

export default Experimental;