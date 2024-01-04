import React, { useEffect, useState } from 'react';
import FacebookPost from './FacebookPost';


import './App.css';
const App = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    // Fetch data from the dummy API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setPostData(data.products));
  }, []);
  console.log(postData)

if(!postData.length){
  return <h1>Loading . . .</h1>
}
  return (
    <div className="app">
    <h1>Facebook Post</h1>
      {postData.map((post, index) => (
        <FacebookPost key={index} post={post} />
      ))}
    </div>
  );
};

export default App;