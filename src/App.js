import React, { useEffect, useState } from 'react';
import FacebookPost from './FacebookPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



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

  if (!postData.length) {
    return <h1>Loading . . .</h1>
  }
  return (
    <div className="app">
      <div className='fbHeading'>
        <FontAwesomeIcon className='fbIcon' icon={faFacebook} />
        <h1>Facebook Post</h1>
      </div>

      {postData.map((post, index) => (
        <FacebookPost key={index} post={post} />
      ))}
    </div>
  );
};

export default App;