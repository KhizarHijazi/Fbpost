import React from 'react';
import { useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import CustomButton from './Custombtn';

import './App.css';

const FacebookPost = ({ post }) => {
  const [showEmojiPopover, setShowEmojiPopover] = useState(false);

  const handleLike = () => {
    setShowEmojiPopover(!showEmojiPopover);
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setShowEmojiPopover(false);
  };

  const handleComment = () => {

  };

  const handleShare = () => {

  };

  const emojiArray = ['😀', '😍', '👍', '👏', '❤️'];


  return (
    <div className="facebook-post">
      <div className="post-header">

      <div className="product-info">
        <div className='brand'>
          <img src={post.thumbnail}/>
          <p className="user-name">{post.brand}-{post.category}-{post.title}</p>
       

          </div>
          <p className="post-description">{post.description}</p>

        </div>

        <FbImageLibrary images={post.images} hideOverlay={false}
        
        />

          <div className='footter'>

            <p className='id'>Counter {post.id}</p>
            <p className='price'>Price {post.price}</p>
            <p className='rating'>Rating {post.rating}</p>
            <p className='stock'>Available Stock {post.stock}</p>
            <p className='stock'>Discount {post.discountPercentage}%</p>
          </div>

         

          <div className='btnsBox'>

          {/* <CustomButton  lable='Like' onClick={handleLike}/> */}
          <CustomButton lable='Like' onClick={handleLike} />
          <CustomButton  lable='Comment' onClick={handleComment}/>
          <CustomButton  lable='Share' onClick={handleShare}/>
          </div>

          {showEmojiPopover && (
        <div className="emoji-popover">
          {emojiArray.map((emoji, index) => (
            <span
              key={index}
              className='selected'
            >
              {emoji}
            </span>
          ))}
        </div>
      )}


      </div>
     
    </div>
  );
};

export default FacebookPost;