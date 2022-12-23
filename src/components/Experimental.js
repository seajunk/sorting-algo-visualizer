import React, { useState, useRef, useEffect } from "react";
import insertionSort from "../algorithms/insertionSort";
import bubbleSort from "../algorithms/bubbleSort";
import { mergeSort } from "../algorithms/mergeSort";
import selectionSort from "../algorithms/selectionSort";
import Graph from "./Graph";

const Experimental = () => {
  const [userInput, setUserInput] = useState("10 9 8 7 6 5 4 3 2 1");
  const [arr, setArr] = useState([]);
  const [number, setNumber] = useState(10);
  const [intervalId, setIntervalId] = useState(null);
  const [button, setButton] = useState("sort");
  const [func, setFunc] = useState(() => insertionSort);
  const [slide, setSlide] = useState(0);

  let dict = new Object();
  dict["1"] = insertionSort;
  dict["2"] = bubbleSort;
  dict["3"] = mergeSort;
  dict["4"] = selectionSort;

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setArr(userInput.split(" ").map((i) => Number(i)));
  }, []);

  const handleChange = (event) => {
    var bruh = event.target.value.split(" ").map((i) => Number(i));
    setUserInput(event.target.value);
    setArr(bruh);
  };

  const handleFunc = (event) => {
    clearInterval(intervalId);
    setFunc(() => dict[event.target.value]);
  };

  useEffect(() => {
    if (button != "sort") {
      displaySort();
    }
  }, [func]);

  const displaySort = () => {
    clearInterval(intervalId);
    var i = 0;

    var interval = setInterval(() => {
      setArr(func(arr)[i]);
      i++;
      if (i >= func(arr).length) {
        clearInterval(interval);
        setButton("sort");
      }
    }, 50);
    setIntervalId(interval);
  };

  function isSorted() {
    let second_index;
    for (let first_index = 0; first_index < arr.length; first_index++) {
      second_index = first_index + 1;
      if (arr[second_index] - arr[first_index] < 0) return false;
    }
    return true;
  }

  const handleClick = () => {
    if (button == "sort" && !isSorted()) {
      setButton("pause");
      displaySort();
    } else {
      clearInterval(intervalId);
      setButton("sort");
    }
  };

  const reset = () => {
    setArr(userInput.split(" ").map((i) => Number(i)));
    setButton("sort");
    clearInterval(intervalId);
  };

  const generate = (event) => {
    event.preventDefault();
    reset();
    var temp = [];
    for (var i = 1; i <= number; i++) {
      temp.push(i);
    }
    var temp2 = temp.sort(() => Math.random() - 0.5);
    setUserInput(temp2.join(" "));
    setArr(temp2);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleSlide = (event) => {
    clearInterval(intervalId);
    setButton("sort");
    var temp = Math.floor(
      (func(userInput.split(" ").map((i) => Number(i))).length - 1) *
        (event.target.value / 1000)
    );
    setArr(func(userInput.split(" ").map((i) => Number(i)))[temp]);
  };

  const test = () => {
    let a = [8, 7, 6, 5, 4, 3, 2, 1];
    console.log(mergeSort(a));
  };

  return (
    <div>
      <input
        value={userInput}
        ref={inputRef}
        type="text"
        onChange={handleChange}
      ></input>
      <form onSubmit={generate}>
        <input
          type="number"
          min="0"
          max="1000"
          value={number}
          onChange={handleNumber}
        ></input>
        <button>generate</button>
      </form>
      <select onChange={handleFunc}>
        <option value="1">InsertionSort</option>
        <option value="2">BubbleSort</option>
        <option value="3">MergeSort</option>
        <option value="4">SelectionSort</option>
      </select>
      <button onClick={handleClick}>{button}</button>
      <button onClick={reset}>reset</button>
      <input
        defaultValue="0"
        type="range"
        min="0"
        max="1000"
        onChange={handleSlide}
      ></input>
      <Graph data={arr}></Graph>
      <button onClick={test}>Test</button>
    </div>
  );
};

export default Experimental;
