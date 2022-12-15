import React, {useState, useRef, useEffect} from "react";
import insertionSort from "../algorithms/insertionSort";
import bubbleSort from '../algorithms/bubbleSort';
import Graph from './Graph'

const Experimental = () => {
    const [userInput, setUserInput] = useState('1 2 3 4 5 6 7 8 9 10')
    const [key, setKey] = useState('1');
    const [arr, setArr] = useState([]);
    const [number, setNumber] = useState(10);
    const [intervalId, setIntervalId] = useState(null);
    const [button, setButton] = useState('sort')

    let dict = new Object();
    dict['1'] = insertionSort;
    dict['2'] = bubbleSort;

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
        setArr(userInput.split(" ").map(i => Number(i)))
    }, [])


    const handleChange = (event) => {
        var bruh = event.target.value.split(" ").map(i => Number(i));
        setUserInput(event.target.value);
        setArr(bruh);
    }



    const handleKey = (event) => {
        setKey(event.target.value)
        clearInterval(intervalId)
        setButton('sort')
        // if(button == "sort"){

        // }
        // else{
        //     displaySort()
        // }
    }

    const displaySort = () => {
            clearInterval(intervalId)
            var temp = dict[key](arr)
            var i = 0;

            var interval = setInterval(() => {
                setArr(temp[i]);
                i++
                if(i >= temp.length){
                    clearInterval(interval)
                    setButton("sort")
                }
            }, 50)
            setIntervalId(interval)
            
    }

    function isSorted(){
        let second_index;
        for(let first_index = 0; first_index < arr.length; first_index++){
            second_index = first_index + 1;
          if(arr[second_index] - arr[first_index] < 0) return false;
        }
        return true;
    }

    const handleClick = () => {
        if(button == "sort" && !isSorted()){
            setButton("pause")
            displaySort()
            }
        else{
            clearInterval(intervalId)
            setButton("sort")
        }
    }

    const reset = () => {
        setArr(userInput.split(" ").map(i => Number(i)))
        setButton('sort')
        clearInterval(intervalId)
    }

    const generate = (event) => {
        event.preventDefault()
        reset()
        var temp = []
        for(var i = 1; i <= number; i++){
            temp.push(i)
        }
        var temp2 = temp.sort(() => Math.random() - 0.5)
        setUserInput(temp2.join(' '))
        setArr(temp2)
    }
    
    const handleNumber = (event) => {
        setNumber(event.target.value)
    }
 

    return(
        <div>
            <input value={userInput} ref={inputRef} type='text' onChange={handleChange} ></input>
            <form onSubmit={generate}>
                <input type="number" min="0" max="1000" value={number} onChange={handleNumber} ></input>
                <button>generate</button>
            </form>
            <select onChange={handleKey}>
                <option value="1">InsertionSort</option>
                <option value="2">BubbleSort</option>
            </select>
            <button onClick={handleClick} >{button}</button>
            <button onClick={reset}>reset</button>
            {/* <p>{arr.map(i => String(i) + " ")}</p>
            <p>{visual.map(i => String(i) + " ")}</p> */}
            <Graph data={arr}></Graph>
        </div>
    )
}

export default Experimental;