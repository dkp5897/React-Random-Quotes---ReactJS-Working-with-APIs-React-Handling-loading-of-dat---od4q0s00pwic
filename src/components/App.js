
import React, { useEffect, useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {

  const [getData,setData] = useState({
    quote:'',
    author:''
  })
  const [getNext,setNext] = useState(0)

  const fetchData = ()  =>{
    fetch('https://api.quotable.io/random')
    .then((r)=>{
      r.json().then((res)=>{
        console.log(res);
        setData({
          author:res.author,
          quote:res.content,
        })
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    fetchData()
  },[getNext])

  const clickHandler = () =>{
    setNext(getNext + 1)
  }

    return (
      <div id="main">
        <div id="wrapper">
          <div className='quote-text'>
            {getData.quote}
          </div>
          <div className='quote-author'>
            {getData.author}
          </div>
          <button onClick={clickHandler}>next quote</button>
        </div>
      </div>
    );
};

export default App;
