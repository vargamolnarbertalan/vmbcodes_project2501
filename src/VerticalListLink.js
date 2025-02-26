import React from 'react';

const VerticalListLink = ({textArr, linktextArr, titleArr, linkdestArr}) => {
  return (
    <div className="vertical-list-holder">
      <div className='vert-list-el-holder-link vert-list-el-holder'>
        <div className='el-title el-title-link'>{titleArr[0]}</div>
        <div className='el-text'>{textArr[0]}</div>
        <div onClick={() => { window.location.href =  linkdestArr[0]}} className='el-link'>{linktextArr[0]}</div>
      </div>
      <div className='vert-list-el-holder-link vert-list-el-holder'>
        <div className='el-title el-title-link'>{titleArr[1]}</div>
        <div className='el-text'>{textArr[1]}</div>
        <div onClick={() => { window.location.href = linkdestArr[1] }} className='el-link'>{linktextArr[1]}</div>
      </div>
      <div className='vert-list-el-holder-link vert-list-el-holder'>
        <div className='el-title el-title-link'>{titleArr[2]}</div>
        <div className='el-text'>{textArr[2]}</div>
        <div onClick={() => { window.location.href = linkdestArr[2] }} className='el-link'>{linktextArr[2]}</div>
      </div>
      <div className='vert-list-el-holder-link vert-list-el-holder'>
        <div className='el-title el-title-link'>{titleArr[3]}</div>
        <div className='el-text'>{textArr[3]}</div>
        <div onClick={() => { window.location.href = linkdestArr[3] }} className='el-link'>{linktextArr[3]}</div>
      </div>
    </div>
  );
}

export default VerticalListLink;
