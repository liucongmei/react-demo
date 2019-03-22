import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoadImg from 'react-lazyload-img';
export default ({src = 'https://avatars3.githubusercontent.com/u/8694508?v=4&s=72', size = '140', isCircle = true, loginname}) => {
  return (
    <Link to={`/user/${loginname}`}>
      <LazyLoadImg
        src={src}
        style={{
          height: `50px`,
          width: `50px`,
          borderRadius: isCircle ? '50%' : 'none',
          borderColor: 'rgb(221, 221, 221)',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
        placeholder={src}       
      />
      {/* <img
        src={src}
        
        alt="avatar"
      /> */}
    </Link>
  )
};


