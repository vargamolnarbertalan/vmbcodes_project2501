import React from 'react';

const VerticalList = ({textArr, srcArr, titleArr}) => {
  return (
    <div className="vertical-list-holder">
      <div className='vert-list-el-holder'>
        <div className='el-title'>{titleArr[0]}</div>
        <div className='el-img'>
          <img alt={textArr[0]} src={srcArr[0]}></img>
        </div>
        <div className='el-text'>{textArr[0]}</div>
      </div>
      <div className='vert-list-el-holder'>
        <div className='el-title'>{titleArr[1]}</div>
        <div className='el-img'>
          <img alt={textArr[1]} src={srcArr[1]}></img>
        </div>
        <div className='el-text'>{textArr[1]}</div>
      </div>
      <div className='vert-list-el-holder'>
        <div className='el-title'>{titleArr[2]}</div>
        <div className='el-img'>
          <img alt={textArr[2]} src={srcArr[2]}></img>
        </div>
        <div className='el-text'>{textArr[2]}</div>
      </div>
      <div className='vert-list-el-holder'>
        <div className='el-title'>{titleArr[3]}</div>
        <div className='el-img'>
          <img alt={textArr[3]} src={srcArr[3]}></img>
        </div>
        <div className='el-text'>{textArr[3]}</div>
      </div>
    </div>
  );
}

export default VerticalList;
